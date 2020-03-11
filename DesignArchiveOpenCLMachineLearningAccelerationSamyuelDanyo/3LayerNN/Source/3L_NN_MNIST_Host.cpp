//////////////////////////////////////////////////////////////////
////Made by Samyuel Danyo on 06/11/2017
//Based on Intel FPGA example [Multithread Vector Operation] main.cpp
///////////////////////////////////////////////////////////////////
////This is C++ host program implementing  3 Layer NN for hand-written digits
////MNIST classification. It is written for Intel FPGA, synthesized with
////Intel FPGA SDK
#include <iostream>
#include <cstdio>
#include <ctime>
#include <assert.h>
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <cstring>
#include <string>
#include <algorithm>
#include <vector>

#include "CL/opencl.h"
#include "AOCLUtils/aocl_utils.h" 

#include "../../DATA_H/TEST_DATA.h"
 #include "../../DATA_H/WEIGHTS.h"

#define CLOCKS_PER_MS (CLOCKS_PER_SEC / 1000)
#define HL_1_N 500
#define HL_2_N 150
#define OL_N 10
#define STRINGIFY(x) #x
#define STRINGIFYMACRO(y) STRINGIFY(y)

//Thread library for each platform
#ifdef _WIN32 //Windows
#include <windows.h>
typedef HANDLE acl_thread_t;
#else         //Linux
#include <pthread.h>
typedef pthread_t acl_thread_t;
#endif

using namespace aocl_utils;
using namespace std;

// OpenCL runtime configuration
cl_platform_id platform = NULL;
cl_context context = NULL;
cl_program program = NULL;
unsigned num_devices = 0;
scoped_array<cl_device_id> device;

enum Kernel {
	KERNEL_HL_1 = 0,
	KERNEL_HL_2,
	KERNEL_OL,
	NUM_KERNELS
	};

class THREE_Layer_NN
{
public:
  float accuracy;
  vector<float> certainty;
  float av_certainty;
  const char* kernel_HL_1_name;
  const char* kernel_HL_2_name;
  const char* kernel_OL_name;
  const char* OUT_F_NAME;
  const char* LOG_F_NAME;
  THREE_Layer_NN(const char* _OUT_F_NAME,const char* _LOG_F_NAME):OUT_F_NAME(_OUT_F_NAME),LOG_F_NAME(_LOG_F_NAME){
  }

  scoped_array<cl_command_queue> queue_HL_1;
  scoped_array<cl_command_queue> queue_HL_2;
  scoped_array<cl_command_queue> queue_OL;
  scoped_array<scoped_array<cl_kernel> > kernel;
  scoped_array<cl_mem> prediction_Y_buf;
  cl_mem W_HL_1_buf;
  cl_mem W_HL_2_buf;
  cl_mem W_OL_buf;
  cl_mem B_HL_1_buf;
  cl_mem B_HL_2_buf;
  cl_mem B_OL_buf;
  scoped_array<cl_mem> input_X_buf;

  // Problem data.
  vector<vector<vector<float> > > prediction_Y;
  scoped_array<scoped_aligned_ptr<float> > kernel_Y;
  scoped_aligned_ptr<float> kernel_W_HL_1;
  scoped_aligned_ptr<float> kernel_W_HL_2;
  scoped_aligned_ptr<float> kernel_W_OL;
  scoped_aligned_ptr<float> kernel_B_HL_1;
  scoped_aligned_ptr<float> kernel_B_HL_2;
  scoped_aligned_ptr<float> kernel_B_OL;
  scoped_array<scoped_aligned_ptr<float> > kernel_X;
  scoped_array<unsigned> n_per_device;
  int pred_digit[T_test_x];
  int label_digit[T_test_x];
  void init();
  void run();
  void cleanup();
  void start();
  void SOFTMAX_LAYER();
  void VERIFICATION();
  void get_accuracy(const float T[][10]);
  void get_certainty();
};
 
// Function prototypes
void* start_helper(void * arg);
int acl_thread_create(acl_thread_t *newthread, void *attr, void *(*start_routine) (void *), void *arg);
int acl_thread_join(acl_thread_t *threadp);
bool init_opencl();
void cleanup();
int argmax_const(const float X[]);
int argmax(vector<float> X);
void SOFTMAX(vector<float> &y);

///// MAIN FUNCTION//////
//
int main(int argc, char **argv) {
  Options options(argc, argv);
  const char* f_name = "data.dat";
  const char* log_f_name = "log.log";
  acl_thread_t t1;
  cl_int status;

  // Optional argument to specify the input dataset size.

  if(options.has("f_name")) {
    f_name = options.get<char*>("f_name");
  }

  if(options.has("log_f_name")) {
     log_f_name = options.get<char*>("log_f_name");
  }

  // Initialize OpenCL.
  if(!init_opencl()) {
    return -1;
  }

  // THREE_Layer_NN Object Declaration
  THREE_Layer_NN digits(f_name,log_f_name);
  status = acl_thread_create(&t1, NULL, &start_helper, &digits);
  if (status != 0){
    printf("Can't create thread: %s\n", strerror(status));
  }
  else {
    printf("Thread1 created successfully\n");
  }
  // Waiting for the threads to end...
  acl_thread_join(&t1);
  printf("Thread1 done\n");
  cleanup();
  return 0;
}    
  
/////// HELPER FUNCTIONS ///////
//// The helper function for starting the threads.
//
void* start_helper(void * arg) {
  THREE_Layer_NN *digits=(THREE_Layer_NN*) arg;
  printf("Instantiating a new Handwritten Digits(3 Layers NN) inference with args:\n Number of Samples=%s\nHidden Layer 1 Neurons= %s\nHidden Layer 2 Neurons=%s\nOutput Layer Neurons=%s\nOutput_File=%s\n", STRINGIFYMACRO(T_test_x), STRINGIFYMACRO(HL_1_N), STRINGIFYMACRO(HL_2_N), STRINGIFYMACRO(OL_N), digits->OUT_F_NAME);
  digits->start();
  return NULL;
}

int argmax_const(const float X[]) {
	const int N = T_test_y;
	return distance(X, max_element(X, X + N));
}

int argmax(vector<float> X) {
//	const int N = sizeof(X) / sizeof(float);
	return distance(X.begin(), max_element(X.begin(), X.end()));
}

void SOFTMAX(vector<float> &y) {
	float y_sum = 0.0;
//	const int N = sizeof(y) / sizeof(float);
	float ymax = *max_element(y.begin(), y.end());
	for(int f = 0; f < OL_N; f++)
		y[f] = (float) exp(y[f] - ymax);
	for(int f = 0; f < OL_N; f++)
		y_sum += y[f];
	for(int f = 0; f < OL_N; f++)
		y[f] /= y_sum;
}

#ifdef _WIN32   //Windows
int acl_thread_create (acl_thread_t *newthread, void *attr, void *(*start_routine) (void *), void *arg) {
  *newthread=CreateThread (NULL,0, (LPTHREAD_START_ROUTINE)start_routine,arg,DETACHED_PROCESS,NULL);
   attr=0;
   if (*newthread!=0) {
     return 0;
   } else {
     return GetLastError();
   }
}
int acl_thread_join(acl_thread_t *threadp){
  return WaitForMultipleObjects(1,threadp,TRUE,INFINITE);
}
#else         //Linux
//  Thread type used for OS threads.
int acl_thread_create (acl_thread_t *newthread, void *attr, void *(*start_routine) (void *), void *arg) {
  return pthread_create(newthread,(const pthread_attr_t*) attr, start_routine,arg);
}
int acl_thread_join(acl_thread_t *threadp) {
  return pthread_join(*threadp,0);
}
#endif

// Initializes the Common OpenCL objects.
bool init_opencl() {
  cl_int status;

  printf("Initializing OpenCL\n");
  
  if(!setCwdToExeDir()) {
    return false;
  }
  // Get the OpenCL platform.

  platform = findPlatform("Altera");

  if(platform == NULL) {
    printf("ERROR: Unable to find Intel(R) FPGA OpenCL platform.\n");
    return false;
  }
  // Query the available OpenCL device.
  device.reset(getDevices(platform, CL_DEVICE_TYPE_ALL, &num_devices));
  printf("Platform: %s\n", getPlatformName(platform).c_str());
  printf("Using %d device(s)\n", num_devices);
  for(unsigned i = 0; i < num_devices; ++i) {
    printf("  %s\n", getDeviceName(device[i]).c_str());
  }

  // Create the context.
  context = clCreateContext(NULL, num_devices, device, &oclContextCallback, NULL, &status);
  checkError(status, "Failed to create context");

  // Create the program for all device. Use the first device as the
  // representative device (assuming all device are of the same type).`
  std::string binary_file = getBoardBinaryFile("three_layer_nn_host", device[0]);
  printf("Using AOCX: %s\n", binary_file.c_str());
  program = createProgramFromBinary(context, binary_file.c_str(), device, num_devices);

  // Build the program that was just created.
  status = clBuildProgram(program, 0, NULL, "", NULL, NULL);
  checkError(status, "Failed to build program");

  return true;
}

void cleanup() {
  if(program) {
    clReleaseProgram(program);
  }
  if(context) {
     clReleaseContext(context);
  }
}

/////// THREE_Layer_NN CLASS MEMBER FUNCTION IMPLEMENTATIONS ////////
////
//
void THREE_Layer_NN::start()
{
  init();
  run();
  VERIFICATION();
  cleanup();
}

// Initialize the kernel, queue and data for the problem. Requires num_devices to be known.
void THREE_Layer_NN::init() {
  cl_int status;
  
  accuracy = 0.0;
  av_certainty = 0.0;
  kernel_HL_1_name = "HL_1_RELU";
  kernel_HL_2_name = "HL_2_SIG";
  kernel_OL_name = "OL_SOFTMAX";
   
  prediction_Y.resize(1);
  for (int i = 0; i < 1; i++)
  {
    prediction_Y[i].resize(T_test_x);
    for (int j = 0; j < T_test_x; j++)
    {
       prediction_Y[i][j].resize(T_test_y);
    }
  }
  
  for(int i = 0; i < T_test_x; i++){
		label_digit[i] = argmax_const(T_test[i]);
		pred_digit[i] = 0;}
  if(num_devices == 0) {
    checkError(-1, "No devices");
  }
  
  // Create all-device objects.
  W_HL_1_buf = clCreateBuffer(context, CL_MEM_READ_WRITE,
        INPUT_N * HL_1_N * sizeof(float), NULL, &status);
    checkError(status, "Failed to create W_HL_1 buffer");
  W_HL_2_buf = clCreateBuffer(context, CL_MEM_READ_WRITE,
        HL_1_N * HL_2_N * sizeof(float), NULL, &status);
    checkError(status, "Failed to create W_HL_2 buffer");
  W_OL_buf = clCreateBuffer(context, CL_MEM_READ_WRITE,
        HL_2_N * OL_N * sizeof(float), NULL, &status);
    checkError(status, "Failed to create W_OL buffer");
  B_HL_1_buf = clCreateBuffer(context, CL_MEM_READ_WRITE,
        HL_1_N * sizeof(float), NULL, &status);
    checkError(status, "Failed to create B_HL_1 buffer");
  B_HL_2_buf = clCreateBuffer(context, CL_MEM_READ_WRITE,
        HL_2_N * sizeof(float), NULL, &status);
    checkError(status, "Failed to create B_HL_2 buffer");
  B_OL_buf = clCreateBuffer(context, CL_MEM_READ_WRITE,
        OL_N * sizeof(float), NULL, &status);
    checkError(status, "Failed to create B_OL buffer");

  // Create per-device objects.
  queue_HL_1.reset(num_devices);
  queue_HL_2.reset(num_devices);
  queue_OL.reset(num_devices);
  kernel.reset(num_devices);
  n_per_device.reset(num_devices);
  prediction_Y_buf.reset(num_devices);
  input_X_buf.reset(num_devices);
  
  for(unsigned i = 0; i < num_devices; ++i) {
    // Command queue.
    queue_HL_1[i] = clCreateCommandQueue(context, device[i], CL_QUEUE_PROFILING_ENABLE, &status);
    checkError(status, "Failed to create HL_1 command queue");
    queue_HL_2[i] = clCreateCommandQueue(context, device[i], CL_QUEUE_PROFILING_ENABLE, &status);
    checkError(status, "Failed to create HL_2 command queue");
    queue_OL[i] = clCreateCommandQueue(context, device[i], CL_QUEUE_PROFILING_ENABLE, &status);
    checkError(status, "Failed to create OL command queue");

    // Kernels.
	kernel[i].reset(NUM_KERNELS);
	
    kernel[i][KERNEL_HL_1] = clCreateKernel(program, kernel_HL_1_name, &status);
    checkError(status, "Failed to create HL_1 kernel");

	kernel[i][KERNEL_HL_2] = clCreateKernel(program, kernel_HL_2_name, &status);
    checkError(status, "Failed to create HL_2 kernel");
	
	kernel[i][KERNEL_OL] = clCreateKernel(program, kernel_OL_name, &status);
    checkError(status, "Failed to create OL kernel");
	
    // Determine the number of elements processed by this device.
    n_per_device[i] = T_test_x / num_devices; // number of elements handled by this device

    // Spread out the remainder of the elements over the first
    // N % num_devices.
    if(i < (T_test_x % num_devices)) {
      n_per_device[i]++;
    }
    
    // Input buffer.
    input_X_buf[i] = clCreateBuffer(context, CL_MEM_READ_WRITE,
        n_per_device[i] * X_test_y * sizeof(float), NULL, &status);
    checkError(status, "Failed to create buffer for input");

    // Output buffer.
    prediction_Y_buf[i] = clCreateBuffer(context, CL_MEM_READ_WRITE,
        n_per_device[i] * T_test_y * sizeof(float), NULL, &status);
    checkError(status, "Failed to create buffer for output");
  }

  //initializing the data and calculating the reference output for comparison.
  //prediction_Y = (float *)alignedMalloc(sizeof(float) * num_devices * T_test_x * T_test_y);
  
  kernel_Y.reset(num_devices);
  kernel_X.reset(num_devices);
  
  kernel_W_HL_1.reset(INPUT_N * HL_1_N);
  kernel_W_HL_2.reset(HL_1_N * HL_2_N);
  kernel_W_OL.reset(HL_2_N * OL_N);
  kernel_B_HL_1.reset(HL_1_N);
  kernel_B_HL_2.reset(HL_2_N);
  kernel_B_OL.reset(OL_N);
  
  kernel_W_HL_1 = (float *)alignedMalloc(sizeof(float) * INPUT_N * HL_1_N);
  kernel_W_HL_2 = (float *)alignedMalloc(sizeof(float) * HL_1_N * HL_2_N);
  kernel_W_OL = (float *)alignedMalloc(sizeof(float) * HL_2_N * OL_N);
  kernel_B_HL_1 = (float *)alignedMalloc(sizeof(float) * HL_1_N);
  kernel_B_HL_2 = (float *)alignedMalloc(sizeof(float) * HL_2_N);
  kernel_B_OL = (float *)alignedMalloc(sizeof(float) * OL_N);
  
  for(unsigned n = 0; n < HL_1_N; n++)
  	for(unsigned f = 0; f < INPUT_N; f++)
		  kernel_W_HL_1[n * INPUT_N + f] = W_HL_1[f][n];
	  
  for(unsigned n = 0; n < HL_2_N; n++)
  	for(unsigned f = 0; f < HL_1_N; f++)
		  kernel_W_HL_2[n * HL_1_N + f] = W_HL_2[f][n];
	  
  for(unsigned n = 0; n < OL_N; n++)
  	for(unsigned f = 0; f < HL_2_N; f++)
		  kernel_W_OL[n * HL_2_N + f] = W_OL[f][n];
	  
  for(unsigned c = 0; c < HL_1_N; ++c)
		  kernel_B_HL_1[c] = B_HL_1[c];
	  
  for(unsigned c = 0; c < HL_2_N; ++c)
		  kernel_B_HL_2[c] = B_HL_2[c];
	  
  for(unsigned c = 0; c < OL_N; ++c)
		  kernel_B_OL[c] = B_OL[c];  

  // Generate input vector X & the reference output consisting
  // of a total of N elements.
  // We create separate arrays for each device so that each device has an
  // aligned buffer. 
  for(unsigned i = 0; i < num_devices; ++i) {
	kernel_Y[i].reset(n_per_device[i] * T_test_y);
	kernel_Y[i] = (float *)alignedMalloc(sizeof(float) * n_per_device[i] * T_test_y);
	kernel_X[i].reset(n_per_device[i] * X_test_y);
	kernel_X[i] = (float *)alignedMalloc(sizeof(float) * n_per_device[i] * X_test_y);
	for(unsigned j = 0; j < n_per_device[i]; ++j) {
		for(unsigned k = 0; k < X_test_y; ++k) {
				kernel_X[i][j * X_test_y + k] = X_test[j * i + j][k];}
	}
  }
  printf("Initialized\n");
 }

void THREE_Layer_NN::run() {
  cl_int status;
    scoped_array<cl_event> kernel_HL_1_event(num_devices);
	scoped_array<cl_event> kernel_HL_2_event(num_devices);
	scoped_array<cl_event> kernel_OL_event(num_devices);
    scoped_array<cl_event> finish_event(num_devices);
	
  std::clock_t start;
  std::clock_t end;
  unsigned duration;
  std::clock_t clocks;
  //Running for the number of iterations (done for testing purpose, to get more accurate run times)
    const float start_time = getCurrentTimestamp();
	start = std::clock();

    // Launch the problem for each device.
    for(unsigned i = 0; i < num_devices; ++i) {

	cl_event write_event_HL_1[1];
	cl_event write_event_HL_2[1];
	cl_event write_event_OL[1];  
	
	status = clEnqueueWriteBuffer(queue_HL_1[i], W_HL_1_buf, CL_FALSE,
        0, INPUT_N * HL_1_N * sizeof(float), kernel_W_HL_1, 0, NULL, &write_event_HL_1[0]);
      checkError(status, "Failed to transfer W_HL_1");
	  
	  status = clEnqueueWriteBuffer(queue_HL_2[i], W_HL_2_buf, CL_FALSE,
        0, HL_1_N * HL_2_N * sizeof(float), kernel_W_HL_2, 0, NULL, &write_event_HL_2[0]);
      checkError(status, "Failed to transfer W_HL_2");
	  
	  status = clEnqueueWriteBuffer(queue_OL[i], W_OL_buf, CL_FALSE,
        0, HL_2_N * OL_N * sizeof(float), kernel_W_OL, 0, NULL, &write_event_OL[0]);
      checkError(status, "Failed to transfer W_OL");
	  
	  status = clEnqueueWriteBuffer(queue_HL_1[i], B_HL_1_buf, CL_FALSE,
        0, HL_1_N * sizeof(float), kernel_B_HL_1, 0, NULL, &write_event_HL_1[0]);
      checkError(status, "Failed to transfer B_HL_1");
	  
	  status = clEnqueueWriteBuffer(queue_HL_2[i], B_HL_2_buf, CL_FALSE,
        0, HL_2_N * sizeof(float), kernel_B_HL_2, 0, NULL, &write_event_HL_2[0]);
      checkError(status, "Failed to transfer B_HL_2");
	  
	  status = clEnqueueWriteBuffer(queue_OL[i], B_OL_buf, CL_FALSE,
        0, OL_N * sizeof(float), kernel_B_OL, 0, NULL, &write_event_OL[0]);
      checkError(status, "Failed to transfer B_OL");
	  
	  status = clEnqueueWriteBuffer(queue_HL_1[i], input_X_buf[i], CL_FALSE,
        0, n_per_device[i] * X_test_y * sizeof(float), kernel_X[i], 0, NULL, &write_event_HL_1[0]);
      checkError(status, "Failed to transfer the input X dataset");
      
      // Set kernel arguments.
      unsigned argi = 0;
      
      //HL1
	  status = clSetKernelArg(kernel[i][KERNEL_HL_1], argi++, sizeof(cl_mem), &input_X_buf[i]);
      checkError(status, "Failed to set argument %d on HL_1", argi - 1);
	  
	  status = clSetKernelArg(kernel[i][KERNEL_HL_1], argi++, sizeof(cl_mem), &W_HL_1_buf);
      checkError(status, "Failed to set argument %d on HL_1", argi - 1);
	  
	  status = clSetKernelArg(kernel[i][KERNEL_HL_1], argi++, sizeof(cl_mem), &B_HL_1_buf);
      checkError(status, "Failed to set argument %d on HL_1", argi - 1);
	  
	  //HL2
	  argi = 0;
	  status = clSetKernelArg(kernel[i][KERNEL_HL_2], argi++, sizeof(cl_mem), &W_HL_2_buf);
      checkError(status, "Failed to set argument %d on HL_1", argi - 1);
	  
	  status = clSetKernelArg(kernel[i][KERNEL_HL_2], argi++, sizeof(cl_mem), &B_HL_2_buf);
      checkError(status, "Failed to set argument %d on HL_1", argi - 1);
      
      //OL
      argi = 0;
      status = clSetKernelArg(kernel[i][KERNEL_OL], argi++, sizeof(cl_mem), &W_OL_buf);
      checkError(status, "Failed to set argument %d on HL_1", argi - 1);
	  
	  status = clSetKernelArg(kernel[i][KERNEL_OL], argi++, sizeof(cl_mem), &B_OL_buf);
      checkError(status, "Failed to set argument %d on HL_1", argi - 1);
      
      status = clSetKernelArg(kernel[i][KERNEL_OL], argi++, sizeof(cl_mem), &prediction_Y_buf[i]);
      checkError(status, "Failed to set argument %d", argi - 1);

      // Enqueue kernel.
      // Use a global work size corresponding to the number of elements to add
      // for this device.
      // 
      // We don't specify a local work size and let the runtime choose
      // (it'll choose to use one work-group with the same size as the global
      // work-size).
      //
      // Events are used to ensure that the kernel is not launched until
      // the writes to the input buffers have completed.
      const size_t global_work_size = n_per_device[i];
      const size_t local_work_size = 1000;
      printf("\nLaunching for device: %d (%d elements)\n", i, global_work_size);
      
      
      status = clEnqueueNDRangeKernel(queue_HL_1[i], kernel[i][KERNEL_HL_1], 1, NULL,
          &global_work_size, NULL, 1, write_event_HL_1, &kernel_HL_1_event[i]);
      checkError(status, "Failed to launch HL_1 kernel");
      
	  status = clEnqueueNDRangeKernel(queue_HL_2[i], kernel[i][KERNEL_HL_2], 1, NULL,
          &global_work_size, NULL, 1, write_event_HL_2, &kernel_HL_2_event[i]);
      checkError(status, "Failed to launch HL_2 kernel");
      
	  status = clEnqueueNDRangeKernel(queue_OL[i], kernel[i][KERNEL_OL], 1, NULL,
          &global_work_size, NULL, 1, write_event_OL, &kernel_OL_event[i]);
      checkError(status, "Failed to launch OL kernel");
      
      printf("Launched all kernels!\n");
      
      // Read the result. This the final operation.
      status = clEnqueueReadBuffer(queue_OL[i], prediction_Y_buf[i], CL_FALSE,
        0, n_per_device[i] * T_test_y * sizeof(float), kernel_Y[i], 1, &kernel_OL_event[i], &finish_event[i]);
      checkError(status, "Failed to read OUT buffer");
   
      // Release local events.
      clReleaseEvent(write_event_HL_1[0]);
	  clReleaseEvent(write_event_HL_2[0]);
	  clReleaseEvent(write_event_OL[0]);
    }
   

    // Wait for all devices to finish.
    clWaitForEvents(num_devices, finish_event);
    
    printf("All Events Finished!\n");
  
	for(unsigned i = 0; i < num_devices; i++)
		for(unsigned img = 0; img < n_per_device[i]; img++)
			for(unsigned f = 0; f < T_test_y; f++)
				prediction_Y[i][img][f] = kernel_Y[i][T_test_y * img + f];
	SOFTMAX_LAYER();
	
    const float end_time = getCurrentTimestamp();
	end = std::clock();
	clocks = end - start;
    duration = clocks / CLOCKS_PER_MS;
  
    // Wall-clock time taken.
    printf("\nReal Elapsed Time: %0.3f ms\n", (end_time - start_time) * 1e3);
	printf("\nTime in Clock Cycles: %d \n", (int) clocks);
    printf("\nProcessing Time: %0.3f ms\n",(float) duration);
  
    // Get kernel times using the OpenCL event profiling API.
    for(unsigned i = 0; i < num_devices; ++i) {
      cl_ulong time_ns = getStartEndTime(kernel_HL_1_event[i]);
      printf("\nKernel HL_1 time (device %d): %0.3f ms\n", i, double(time_ns) * 1e-6);
	  time_ns = getStartEndTime(kernel_HL_2_event[i]);
      printf("\nKernel HL_2 time (device %d): %0.3f ms\n", i, double(time_ns) * 1e-6);
	  time_ns = getStartEndTime(kernel_OL_event[i]);
      printf("\nKernel OL time (device %d): %0.3f ms\n", i, double(time_ns) * 1e-6);
    }

    // Release all events.
    for(unsigned i = 0; i < num_devices; ++i) {
      clReleaseEvent(kernel_HL_1_event[i]);
	  clReleaseEvent(kernel_HL_2_event[i]);
	  clReleaseEvent(kernel_OL_event[i]);
      clReleaseEvent(finish_event[i]);
    }
 }

// Free the resources allocated during initialization
void THREE_Layer_NN::cleanup() {

    if(W_HL_1_buf) {
      clReleaseMemObject(W_HL_1_buf);
    }
    
    if(W_HL_2_buf) {
      clReleaseMemObject(W_HL_1_buf);
    }
    
    if(W_OL_buf) {
      clReleaseMemObject(W_HL_1_buf);
    }
    
    if(B_HL_1_buf) {
      clReleaseMemObject(B_HL_1_buf);
    }
    
    if(B_HL_2_buf) {
      clReleaseMemObject(B_HL_1_buf);
    }
    
    if(B_OL_buf) {
      clReleaseMemObject(B_HL_1_buf);
    }

  for(unsigned i = 0; i < num_devices; ++i) {
    if(kernel && kernel[i][KERNEL_HL_1]) {
      clReleaseKernel(kernel[i][KERNEL_HL_1]);
    }
	if(kernel && kernel[i][KERNEL_HL_2]) {
      clReleaseKernel(kernel[i][KERNEL_HL_2]);
    }
	if(kernel && kernel[i][KERNEL_OL]) {
      clReleaseKernel(kernel[i][KERNEL_OL]);
    }
    if(queue_HL_1 && queue_HL_1[i]) {
      clReleaseCommandQueue(queue_HL_1[i]);
    }
    if(queue_HL_2 && queue_HL_2[i]) {
      clReleaseCommandQueue(queue_HL_2[i]);
    }
    if(queue_OL && queue_OL[i]) {
      clReleaseCommandQueue(queue_OL[i]);
    }
    if(input_X_buf && input_X_buf[i]) {
      clReleaseMemObject(input_X_buf[i]);
    }
        
    if(prediction_Y_buf && prediction_Y_buf[i]) {
      clReleaseMemObject(prediction_Y_buf[i]);
    }
 }
}
// Works only with 1 device, need to have for (num devices) in there!
void THREE_Layer_NN::SOFTMAX_LAYER() {
	for(int i = 0;i < T_test_x; i++)
		SOFTMAX(prediction_Y[0][i]);
}

void THREE_Layer_NN::VERIFICATION() {
	get_accuracy(T_test);
	get_certainty();
	printf("VERIFICATION: [accuracy: %f] [certainty: %f]\n", accuracy, av_certainty);
	FILE *file1 = fopen(OUT_F_NAME, "w");
    assert(file1);
	fprintf(file1, "3 LAYER NN MNIST CLASSIFICATION\n");
	fprintf(file1, "ACCURACY: %f AV_CERTAINTY: %f \n", accuracy, av_certainty);
    fprintf(file1, "LABEL\tPREDICTION\tCERTAINTY\n");
    for(unsigned j = 0; j < T_test_x; ++j) {
      fprintf(file1, "%d\t%d\t%f\n", label_digit[j], pred_digit[j], certainty[j]);
    }
    fclose(file1);
}

// Work only with 1 device, need to have for (num devices) in there!
void THREE_Layer_NN::get_accuracy(const float T[][10]) {
	int true_pred = 0;
    for(int i = 0; i < T_test_x; i++) {
        pred_digit[i] = argmax(prediction_Y[0][i]);
        if (pred_digit[i] == label_digit[i])
            true_pred ++;
	}
    accuracy = ( (float) true_pred/ (float) T_test_x) * 100.0;
}

void THREE_Layer_NN::get_certainty() {
	float sum = 0;
    for(int i = 0; i < T_test_x; i++)
        certainty.push_back( (float) *max_element(prediction_Y[0][i].begin(), prediction_Y[0][i].end())*100.0);
    for(vector<float>::iterator it = certainty.begin(); it != certainty.end(); ++it)
		sum += *it;
	av_certainty = (float) sum / (float) T_test_x;
}	

