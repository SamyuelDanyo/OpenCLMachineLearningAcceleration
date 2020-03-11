//////////////////////////////////////////////////////////////////
////Created by Samyuel Danyo on 06/11/2017
//Based on Intel FPGA example [Multithread Vector Operation] main.cpp
///////////////////////////////////////////////////////////////////
////This is OpenCL ACL host program implementing  simple Linear Regression
////It is written for Intel FPGA, synthesized with
////Intel SDK
//Testing with transfer of weights & features
#include <iostream>
#include <cstdio>
#include <ctime>
#include <assert.h>
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <cstring>
#include <string>
#include <vector>
//#include <chrono>
#include <getopt.h>
#include "AOCLUtils/aocl_utils.h" 
//#include <Python.h>

#define CLOCKS_PER_MS (CLOCKS_PER_SEC / 1000)

/*//Thread library for each platform
#ifdef _WIN32 //Windows
#include <windows.h>
typedef HANDLE thread_t;
#else         //Linux
#include <pthread.h>
typedef pthread_t thread_t;
#endif
*/
using namespace std;
using namespace aocl_utils;
//using namespace std::chrono;


class Simple_Linear_Regression
{
public:
  unsigned N ;  //Number of Points
  float S;	//start of data interval
  float E;	//end of data interval
  const char* OUT_F_NAME;
  const char* LOG_F_NAME;
  bool pass_pred; // used for verification of the prediction function.
  Simple_Linear_Regression(unsigned _N,float _S,float _E,const char* _OUT_F_NAME,const char* _LOG_F_NAME):N(_N),S(_S),E(_E),OUT_F_NAME(_OUT_F_NAME),LOG_F_NAME(_LOG_F_NAME){
  }
 
  // Problem data.
  vector<float> input_X;
  vector<float> prediction_Y;
  vector<float> weights;
  vector<float> features;
  vector<float> ref_output_pred; 
  void init();
  void run();
  void start();
};
 
// Function prototypes
void* start_helper(void * arg);
//int thread_create(thread_t *newthread, void *attr, void *(*start_routine) (void *), void *arg);
//int thread_join(thread_t *threadp);
float rand_float(float s, float e);
void cleanup();

///// MAIN FUNCTION//////
//
int main(int argc, char **argv) {
//  Options options(argc, argv);
  int n=100;	//number of array elements
  float s=-10.0;	//start of data interval
  float e=10.0;	//end of data interval
  const char* f_name = "data.dat";
  const char* log_f_name = "log.log";
//  thread_t t1;
  int status;
  int c;

  // Optional argument to specify the input dataset size.
  
  while( ( c = getopt (argc, argv, "n:s:e:f_name:log_f_name") ) != -1 ) 
    {
        switch(c)
        {
        case 'n':
                if(optarg) n = std::atoi(optarg);
                break;
        case 's':
                if(optarg) s = std::atoi(optarg);
                break;
	case 'e':
		if(optarg) e = std::atoi(optarg);
		break;
	case 'f':
		if(optarg) f_name = optarg;
		break;
	case 'l':
		if(optarg) log_f_name = optarg;
        	break;
	}
    } 
/*  if(options.has("n")) {
    n = options.get<unsigned>("n");
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
*/
  // Simple Linear Regression Object Declaration
  Simple_Linear_Regression slr1(n,s,e,f_name,log_f_name);
/*  status = thread_create(&t1, NULL, &start_helper, &slr1);
  if (status != 0){
    printf("Can't create thread: %s\n", strerror(status));
  }
  else {
    printf("Thread1 created successfully\n");
  }
  // Waiting for the threads to end...
  thread_join(&t1);
  printf("Thread1 done\n");
*/

  start_helper(&slr1);
  printf("\nVerification: %s\n", (slr1.pass_pred) ? "PASSED PREDICTION" : "FAILED PREDICTION");
  cleanup();
  return 0;
}    
  
/////// HELPER FUNCTIONS ///////
//// The helper function for starting the threads.
//
void* start_helper(void * arg) {
  Simple_Linear_Regression *slr1=(Simple_Linear_Regression*) arg;
  printf("Instantiating a new simple linear regression inference with args: N=%d in [%f:%f],output_file=%s \n",slr1->N,slr1->S,slr1->E,slr1->OUT_F_NAME);
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
/*#ifdef _WIN32   //Windows
int thread_create (thread_t *newthread, void *attr, void *(*start_routine) (void *), void *arg) {
  *newthread=CreateThread (NULL,0, (LPTHREAD_START_ROUTINE)start_routine,arg,DETACHED_PROCESS,NULL);
   attr=0;
   if (*newthread!=0) {
     return 0;
   } else {
     return GetLastError();
   }
}
int thread_join(thread_t *threadp){
  return WaitForMultipleObjects(1,threadp,TRUE,INFINITE);
}
#else         //Linux
//  Thread type used for OS threads.
int thread_create (thread_t *newthread, void *attr, void *(*start_routine) (void *), void *arg) {
  return pthread_create(newthread,(const pthread_attr_t*) attr, start_routine,arg);
}
int thread_join(thread_t *threadp) {
  return pthread_join(*threadp,0);
}
#endif
*/
/////// Simple_Linear_Regression CLASS MEMBER FUNCTION IMPLEMENTATIONS ////////
////
//
void Simple_Linear_Regression::start()
{
  init();
  run();
}

// Initialize the kernel, queue and data for the problem. Requires num_devices to be known.
void Simple_Linear_Regression::init() {
  int status;

  //initializing the data and calculating the reference output for comparison.
  // Generate input vector X & the reference output consisting
  // of a total of N elements.
  // We create separate arrays for each device so that each device has an
  // aligned buffer. 
    input_X.resize(N);
    weights.resize(4);
    features.resize(N * 4);
    prediction_Y.resize(N);
    ref_output_pred.resize(N);
   
    for(unsigned j = 0; j < N; ++j) {
      input_X[j] = rand_float(S,E);
      // Calculate the refrence output based on the current kernel.
       
//    ref_output_pred[i][j] = cos ( 2 * acos (input_X[i][j]) );
       
      ref_output_pred[j] = 10 * exp( -2 * input_X[j] * input_X[j] ) + sin( 3 * input_X[j] ) * 10 + input_X[j];
        
    }
}

void Simple_Linear_Regression::run() {
    int status;
	std::clock_t start_p;
	std::clock_t end_p;
    unsigned duration;
	std::clock_t clocks;
	double start_r;
	double end_r;
	double time_r;
//    auto start_time = duration_cast< microseconds >(
//		system_clock::now().time_since_epoch());
    start_p = std::clock();
	start_r = aocl_utils::getCurrentTimestamp();
	
    weights[0] = -0.55395846;
    weights[1] = 1;
    weights[2] = 10;
    weights[3] = 8.94836441;

    printf("Launching calculation (%d elements)\n",N);
  
    for(unsigned j = 0; j < N; ++j) {
	features[4 * j] = 1; 
        features[4 * j + 1] = input_X[j];
        features[4 * j + 2] = sin(3 * input_X[j]);
        features[4 * j + 3] = exp(-1 * input_X[j] * input_X[j]);
		
	prediction_Y[j] = weights[0] * features[4 * j]  + features[4 * j + 1] * weights[1] + features[4 * j + 2] * weights[2] + features[4 * j + 3] * weights[3];
	}

	end_p = std::clock();
	end_r = aocl_utils::getCurrentTimestamp();
	clocks = end_p - start_p;
    duration = clocks / CLOCKS_PER_MS;
	time_r = (end_r - start_r) * 1e3;
//    auto end_time = duration_cast< microseconds >(
//                 system_clock::now().time_since_epoch());

  // Wall-clock time taken.
    printf("\nReal Elapsed Time: %0.3f ms\n", time_r);
    printf("\nProcessing Time in Clock Cycles: %d \n", (int) clocks);
    printf("\nProcessing Time: %f ms\n",(float) duration);
  
  // Verify results.
    pass_pred = true;
    FILE *file0 = fopen(LOG_F_NAME, "w");
    assert(file0);
    for(unsigned j = 0; j < N; ++j) {
      if(fabsf(ref_output_pred[j] - prediction_Y[j]) > fabsf(1.5 / fabsf(input_X[j]) + 0.05 * fabsf(ref_output_pred[j]) + 0.7 / fabsf(ref_output_pred[j]) + 0.15)) {
        fprintf(file0, "Failed prediction verification of index %d\nInput: %f\nOutput: %f\nReference: %f\n", j, input_X[j], prediction_Y[j], ref_output_pred[j]);
        pass_pred = false;
      }
    }
    if (pass_pred == 0){
	fprintf(file0, "FAILED PREDICTION");}
    fclose(file0);
 
    FILE *file1 = fopen(OUT_F_NAME, "w");
    assert(file1);
    fprintf(file1, "X\tInput\t\tTrue Label\tCPU Model Out\tFPGA Prediction\tCalc Error\tResidiual\n");
    for(unsigned j = 0; j < N; ++j) {
      fprintf(file1, "%d\t%f\t%f\t%f\t%f\n",j,input_X[j],ref_output_pred[j],prediction_Y[j],(ref_output_pred[j]-prediction_Y[j]));
   }
    fclose(file1);
 
//Running a python script from the C++ program
//  Py_Initialize();
//  PyRun_SimpleFile("../host/plot.py");
//  Py_Finalize();
}

// Free the resources allocated during initialization
void cleanup() {
 printf("CLEAN UP DONE!\n");
}

