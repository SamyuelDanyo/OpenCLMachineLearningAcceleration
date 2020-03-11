//////////////////////////////////////////////////////////////////
////Made by Samyuel Danyo on 06/11/2017
//Based on Intel FPGA example [Multithread Vector Operation] main.cpp
///////////////////////////////////////////////////////////////////
////This is OpenCL ACL kernel implementing a simple Linear Regression
////neuron behavior. It is written for Intel FPGA, synthesized with
////Intel SDK
//SLR Run: 1 Kernel, 2 Threads
#include <iostream>
#include <cstdio>
#include <ctime>
#include <assert.h>
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <cstring>
#include <string>
#include "CL/opencl.h"
#include "AOCLUtils/aocl_utils.h" 
//#include <Python.h>

#define CLOCKS_PER_MS (CLOCKS_PER_SEC / 1000)

//Thread library for each platform
#ifdef _WIN32 //Windows
#include <windows.h>
typedef HANDLE acl_thread_t;
#else         //Linux
#include <pthread.h>
typedef pthread_t acl_thread_t;
#endif

using namespace aocl_utils;
// OpenCL runtime configuration
cl_platform_id platform = NULL;
cl_context context = NULL;
cl_program program = NULL;
unsigned num_devices = 0;
scoped_array<cl_device_id> device;

class Simple_Linear_Regression
{
public:
  unsigned N ;  //Number of Points
  unsigned I;
  float S;	//start of data interval
  float E;	//end of data interval
  const char* OUT_F_NAME;
  const char* LOG_F_NAME;
  const char* kernel_name;
  bool pass_calc; // used for verification of the calculation part.
  bool pass_pred; // used for verification of the prediction function.
  Simple_Linear_Regression(unsigned _N,unsigned _I,float _S,float _E,const char* _OUT_F_NAME,const char* _LOG_F_NAME,const char* _kernel_name):N(_N),I(_I),S(_S),E(_E),OUT_F_NAME(_OUT_F_NAME),LOG_F_NAME(_LOG_F_NAME),kernel_name(_kernel_name){
  }

  scoped_array<cl_command_queue> queue;
  scoped_array<cl_kernel> kernel;
  scoped_array<cl_mem> input_X_buf;
  scoped_array<cl_mem> prediction_Y_buf;

  // Problem data.
  scoped_array<scoped_aligned_ptr<float> > input_X;
  scoped_array<scoped_aligned_ptr<float> > prediction_Y;
  scoped_array<scoped_array<float> > ref_output_calc;
  scoped_array<scoped_array<float> > ref_output_pred; 
  scoped_array<unsigned> n_per_device;
  void init();
  void run();
  void cleanup();
  void start();
};
 
// Function prototypes
void* start_helper(void * arg);
int acl_thread_create(acl_thread_t *newthread, void *attr, void *(*start_routine) (void *), void *arg);
int acl_thread_join(acl_thread_t *threadp);
float rand_float(float s, float e);
bool init_opencl();
void cleanup_opencl();

///// MAIN FUNCTION//////
//
int main(int argc, char **argv) {
  Options options(argc, argv);
  int n=100;	//number of array elements
  int i=1;
  float s=-10.0;	//start of data interval
  float e=10.0;	//end of data interval
  const char* f_name = "data.dat";
  const char* log_f_name = "log.log";
  const char* kernel_name = "simple_linear_regression";
  acl_thread_t t1,t2;
  cl_int status;

  // Optional argument to specify the input dataset size.
  if(options.has("n")) {
    n = options.get<unsigned>("n");
  }

  if(options.has("i")) {
    i = options.get<unsigned>("i");
  }

  if(options.has("s")) {
    s = options.get<float>("s");
  }

  if(options.has("e")) {
    e = options.get<float>("e");
  }

  if(options.has("f_name")) {
    f_name = options.get<char*>("f_name");
  }

  if(options.has("log_f_name")) {
     log_f_name = options.get<char*>("log_f_name");
  }

  printf("SLR Run: 1 Kernel, 2 Threads");
  // Initialize OpenCL.
  if(!init_opencl()) {
    return -1;
  }

  // Simple Linear Regression Object Declaration
  Simple_Linear_Regression slr1(n / 2,i,s,e,f_name,log_f_name,kernel_name);
  Simple_Linear_Regression slr2(n / 2,i,s,e,"data_1.dat","log_1.log",kernel_name);

  status = acl_thread_create(&t1, NULL, &start_helper, &slr1);
  if (status != 0){
    printf("Can't create thread: %s\n", strerror(status));
  }
  else {
    printf("Thread1 created successfully\n");
  }


 status = acl_thread_create(&t2, NULL, &start_helper, &slr2);
  if (status != 0){ 
    printf("Can't create thread: %s\n", strerror(status));
  }
  else {
    printf("Thread2 created successfully\n");
  }
// Waiting for the threads to end...
  acl_thread_join(&t1);
  acl_thread_join(&t2);
  printf("Thread 1 & 2 done\n");

  printf("\nVerification SLR1:%s\n", (slr1.pass_calc) ? "PASSED CALCULATION" : "FAILED CALCULATION");
  printf("\nVerification SLR1: %s\n", (slr1.pass_pred) ? "PASSED PREDICTION" : "FAILED PREDICTION");
  printf("\nVerification SLR2: %s\n", (slr2.pass_calc) ? "PASSED CALCULATION" : "FAILED CALCULATION");
  printf("\nVerification SLR2: %s\n", (slr2.pass_pred) ? "PASSED PREDICTION" : "FAILED PREDICTION");
  cleanup();
  return 0;
}    
  
/////// HELPER FUNCTIONS ///////
//// The helper function for starting the threads.
//
void* start_helper(void * arg) {
  Simple_Linear_Regression *slr1=(Simple_Linear_Regression*) arg;
  printf("\nInstantiating a new simple linear regression inference with args: N=%d, I=%d in [%f:%f],kernel_name=%s,output_file=%s \n",slr1->N,slr1->I,slr1->S,slr1->E,slr1->kernel_name,slr1->OUT_F_NAME);
  slr1->start();
  return NULL;
}

// Randomly generate a floating-point number between -10 and 10.
float rand_float(float s, float e) {
  if(s<0 && e<0){
	return -(float(rand()) / float(RAND_MAX) * (1.0f*fabsf(s) - fabsf(e)*1.0f)) + e;}
  else if(s<0 && e>0){
	 return float(rand()) / float(RAND_MAX) * 2.0f*e +  s*1.0f;}
  else if(s>0 && e>0){
	return float(rand()) / float(RAND_MAX) * (1.0f*e - s*1.0f) + s;}	
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
  std::string binary_file = getBoardBinaryFile("slr_t", device[0]);
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

/////// Simple_Linear_Regression CLASS MEMBER FUNCTION IMPLEMENTATIONS ////////
////
//
void Simple_Linear_Regression::start()
{
  init();
  run();
  cleanup();
}

// Initialize the kernel, queue and data for the problem. Requires num_devices to be known.
void Simple_Linear_Regression::init() {
  cl_int status;

  if(num_devices == 0) {
    checkError(-1, "No devices");
  }

  // Create per-device objects.
  queue.reset(num_devices);
  kernel.reset(num_devices);
  n_per_device.reset(num_devices);
  input_X_buf.reset(num_devices);
  prediction_Y_buf.reset(num_devices);

  for(unsigned i = 0; i < num_devices; ++i) {
    // Command queue.
    queue[i] = clCreateCommandQueue(context, device[i], CL_QUEUE_PROFILING_ENABLE, &status);
    checkError(status, "Failed to create command queue");

    // Kernel.
    kernel[i] = clCreateKernel(program, kernel_name, &status);
    checkError(status, "Failed to create kernel");

    // Determine the number of elements processed by this device.
    n_per_device[i] = N / num_devices; // number of elements handled by this device

    // Spread out the remainder of the elements over the first
    // N % num_devices.
    if(i < (N % num_devices)) {
      n_per_device[i]++;
    }

    // Input buffer.
    input_X_buf[i] = clCreateBuffer(context, CL_MEM_READ_WRITE,
        n_per_device[i] * sizeof(float), NULL, &status);
    checkError(status, "Failed to create buffer for input A");

    // Output buffer.
    prediction_Y_buf[i] = clCreateBuffer(context, CL_MEM_READ_WRITE,
        n_per_device[i] * sizeof(float), NULL, &status);
    checkError(status, "Failed to create buffer for output");
  }

  //initializing the data and calculating the reference output for comparison.
  input_X.reset(num_devices);
  prediction_Y.reset(num_devices);
  ref_output_calc.reset(num_devices);
  ref_output_pred.reset(num_devices);

  // Generate input vector X & the reference output consisting
  // of a total of N elements.
  // We create separate arrays for each device so that each device has an
  // aligned buffer. 
  for(unsigned i = 0; i < num_devices; ++i) {
    input_X[i].reset(n_per_device[i]);
    prediction_Y[i].reset(n_per_device[i]);
    ref_output_calc[i].reset(n_per_device[i]);
    ref_output_pred[i].reset(n_per_device[i]);
    input_X[i] = (float *)alignedMalloc(sizeof(float) * n_per_device[i]);
    prediction_Y[i] = (float *)alignedMalloc(sizeof(float) * n_per_device[i]);

    for(unsigned j = 0; j < n_per_device[i]; ++j) {
      input_X[i][j] = rand_float(S,E);
      // Calculate the refrence output based on the current kernel.
      if((!strcmp(kernel_name,"simple_linear_regression"))||(!strcmp(kernel_name,"simple_linear_regression_1"))) {
//        ref_output_calc[i][j] = -0.99489651 + input_X[i][j] * 0.0170479 + input_X[i][j] * input_X[i][j] * 2.01794626;
        ref_output_calc[i][j] = -0.55395846  + input_X[i][j] * 1 + sin ( 3 * input_X[i][j]) * 10 + exp ( -input_X[i][j] * input_X[i][j]) * 8.94836441;
//        ref_output_pred[i][j] = cos ( 2 * acos (input_X[i][j]) );
        ref_output_pred[i][j] = 10 * exp( -2 * input_X[i][j] * input_X[i][j] ) + sin( 3 * input_X[i][j] ) * 10 + input_X[i][j];
    }
  }
 }
}

void Simple_Linear_Regression::run() {
  cl_int status;
  std::clock_t start;
  std::clock_t end;
  unsigned duration;
  std::clock_t clocks;

  for(unsigned i = 0; i < I; ++i) {
//!!!!!LINES UP TO VERIFICATION NEED TO BE INDENTED 2 SPACES!!!!
  const double start_time = getCurrentTimestamp();
  start = std::clock();

  // Launch the problem for each device.
  scoped_array<cl_event> kernel_event(num_devices);
  scoped_array<cl_event> finish_event(num_devices);

  for(unsigned i = 0; i < num_devices; ++i) {
    // Transfer inputs to each device. Each of the host buffers supplied to
    // clEnqueueWriteBuffer here is already aligned to ensure that DMA is used
    // for the host-to-device transfer.
    cl_event write_event[1];
    status = clEnqueueWriteBuffer(queue[i], input_X_buf[i], CL_FALSE,
        0, n_per_device[i] * sizeof(float), input_X[i], 0, NULL, &write_event[0]);
    checkError(status, "Failed to transfer the input X dataset");

    // Set kernel arguments.
    unsigned argi = 0;

    status = clSetKernelArg(kernel[i], argi++, sizeof(cl_mem), &input_X_buf[i]);
    checkError(status, "Failed to set argument %d", argi - 1);

    status = clSetKernelArg(kernel[i], argi++, sizeof(cl_mem), &prediction_Y_buf[i]);
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
    printf("\n\nLaunching for device %d (%d elements)", i, global_work_size);
    
    status = clEnqueueNDRangeKernel(queue[i], kernel[i], 1, NULL,
        &global_work_size, NULL, 1, write_event, &kernel_event[i]);
    checkError(status, "Failed to launch kernel");

    // Read the result. This the final operation.
    status = clEnqueueReadBuffer(queue[i], prediction_Y_buf[i], CL_FALSE,
        0, n_per_device[i] * sizeof(float), prediction_Y[i], 1, &kernel_event[i], &finish_event[i]);
    checkError(status, "Failed to read buffer");
   
    // Release local events.
    clReleaseEvent(write_event[0]);
  }
   

  // Wait for all devices to finish.
   clWaitForEvents(num_devices, finish_event);
  
  const double end_time = getCurrentTimestamp();
  end = std::clock();
  clocks = end - start;
  duration = clocks / CLOCKS_PER_MS;
  
  // Wall-clock time taken.
  printf("\nReal Elapsed Time: %0.3f ms\n", (end_time - start_time) * 1e3);
  printf("\nTime in Clock Cycles: %d \n", (int) clocks);
  printf("\nProcessing Time: %0.3f ms\n",(float) duration);
  
  // Get kernel times using the OpenCL event profiling API.
  for(unsigned i = 0; i < num_devices; ++i) {
    cl_ulong time_ns = getStartEndTime(kernel_event[i]);
    printf("Kernel time (device %d): %0.3f ms\n", i, double(time_ns) * 1e-6);
 }

  // Release all events.
  for(unsigned i = 0; i < num_devices; ++i) {
    clReleaseEvent(kernel_event[i]);
    clReleaseEvent(finish_event[i]);
  }
  }

  // Verify results.
  pass_calc = true;
  pass_pred = true;
  FILE *file0 = fopen(LOG_F_NAME, "w");
  assert(file0);
  for(unsigned i = 0; i < num_devices; ++i) {
    for(unsigned j = 0; j < n_per_device[i]; ++j) {
      if(fabsf(ref_output_calc[i][j] - prediction_Y[i][j]) > (fabsf(0.005 * ref_output_calc[i][j]) + 0.00001)) {
        fprintf(file0, "Failed calculation verification of device %d, index %d\nInput: %f\nOutput: %f\nReference: %f\n", i, j, input_X[i][j],prediction_Y[i][j], ref_output_calc[i][j]);
        pass_calc = false;
	}
      if(fabsf(ref_output_pred[i][j] - prediction_Y[i][j]) > fabsf(1.5 / abs(input_X[i][j]) + 0.05 * abs(ref_output_pred[i][j]) + 0.7 / abs(ref_output_pred[i][j]) + 0.15)) {
        fprintf(file0, "Failed prediction verification of device %d, index %d\nInput: %f\nOutput: %f\nReference: %f\n", i, j, input_X[i][j], prediction_Y[i][j], ref_output_pred[i][j]);
        pass_pred = false;
      }
    }
  }
  if ((pass_pred == 0) && (pass_calc == 0)){
	fprintf(file0, "FAILED PREDICTION & CALCULATION");}
  fclose(file0);
 
  FILE *file1 = fopen(OUT_F_NAME, "w");
  assert(file1);
  fprintf(file1, "X\tInput\t\tTrue Label\tCPU Model Out\tFPGA Prediction\tCalc Error\tResidiual\n");
  for(unsigned i = 0; i < num_devices; ++i) {
    for(unsigned j = 0; j < n_per_device[i]; ++j) {
      fprintf(file1, "%d\t%f\t%f\t%f\t%f\t%f\t%f\n", (j + i * n_per_device[i-1]),input_X[i][j],ref_output_pred[i][j],ref_output_calc[i][j],prediction_Y[i][j],(ref_output_calc[i][j]-prediction_Y[i][j]),(ref_output_pred[i][j]-prediction_Y[i][j]));
   }
  }
  fclose(file1);
 
//Running a python script from the C++ program
//  Py_Initialize();
//  PyRun_SimpleFile("../host/plot.py");
//  Py_Finalize();
}

// Free the resources allocated during initialization
void Simple_Linear_Regression::cleanup() {
  for(unsigned i = 0; i < num_devices; ++i) {
    if(kernel && kernel[i]) {
      clReleaseKernel(kernel[i]);
    }
    if(queue && queue[i]) {
      clReleaseCommandQueue(queue[i]);
    }
    if(input_X_buf && input_X_buf[i]) {
      clReleaseMemObject(input_X_buf[i]);
    }
    if(prediction_Y_buf && prediction_Y_buf[i]) {
      clReleaseMemObject(prediction_Y_buf[i]);
    }
 }
}

