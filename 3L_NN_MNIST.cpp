//////////////////////////////////////////////////////////////////
////Made by Samyuel Danyo on 06/11/2017
//Based on Intel FPGA example [Multithread Vector Operation] main.cpp
///////////////////////////////////////////////////////////////////
////This is C++ program implementing  3 Layer NN for hand-written digits
////MNIST classification.
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
//#include "AOCLUtils\aocl_utils.h" 
//#include <Python.h>

#include "DATA\TEST_DATA.h"
#include "DATA\WEIGHTS.h"

#define CLOCKS_PER_MS (CLOCKS_PER_SEC / 1000)

#define STRINGIFY(x) #x
#define STRINGIFYMACRO(y) STRINGIFY(y)

using namespace std;
//using namespace aocl_utils;
//using namespace std::chrono;


class THREE_Layer_NN
{
public:
  float accuracy = 0;
  vector<float> certainty;
  float av_certainty = 0;
  const char* OUT_F_NAME;
  const char* LOG_F_NAME;
  THREE_Layer_NN(const char* _OUT_F_NAME,const char* _LOG_F_NAME):OUT_F_NAME(_OUT_F_NAME),LOG_F_NAME(_LOG_F_NAME){
  }
 
  // Problem data.
  float Y[T_test_x][OL_N];
  float F_HL_1[T_test_x][HL_1_N];
  float F_HL_2[T_test_x][HL_2_N];
  float pred_digit[T_test_x];
  float label_digit[T_test_x];
  void init();
  void run();
  void start();
  void SIGMOID_LAYER();
  void RELU_LAYER();
  void SOFTMAX_LAYER();
  void LINEAR_LAYER();
  void FORWARD_PASS();
  void VERIFICATION();
  void get_accuracy();
  void get_certainty();
};
 
// Function prototypes
void* start_helper(void * arg);
int argmax(float X[]);
void mult_mat(float firstMatrix[][], float secondMatrix[][], float mult[][], int rowFirst, int columnFirst, int rowSecond, int columnSecond);
float SIGMOID(float x);
float RELU(float x);
void SOFTMAX(float y[]);
void cleanup();

///// MAIN FUNCTION//////
//
int main(int argc, char **argv) {
//  Options options(argc, argv);
  const char* f_name = "data.dat";
  const char* log_f_name = "log.log";
  int status;
  int c;

  // Optional argument to specify the input dataset size.
  
  while( ( c = getopt (argc, argv, "f_name:log_f_name") ) != -1 ) 
    {
        switch(c)
        {
		case 'f':
			if(optarg) f_name = optarg;
			break;
		case 'l':
			if(optarg) log_f_name = optarg;
				break;
		}
    } 

  // 3 LAYER NN Object Declaration
  THREE_Layer_NN digits(f_name,log_f_name);

  start_helper(&digits);
  printf("THANK YOU FOR RUNNING MY CLASSIFIER, AUTHOR: SAMYUEL DANYO");
  cleanup();
  return 0;
}    
  
/////// HELPER FUNCTIONS ///////
//// The helper function for starting the threads.
//
void* start_helper(void * arg) {
  THREE_Layer_NN *digits=(THREE_Layer_NN*) arg;
  cout << "Instantiating a new Handwritten Digits(3 Layers NN) inference with args:\n Number of Samples=" << STRINGIFYMACRO(T_test_x) << "\n"
  << "Hidden Layer 1 Neurons=" << STRINGIFYMACRO(HL_1_N) << "\nHidden Layer 2 Neurons=" << STRINGIFYMACRO(HL_2_N) << "\nOutput Layer Neurons=" 
  << STRINGIFYMACRO(OL_N) << "\nOutput_File=%s \n",digits->OUT_F_NAME;
  digits->start();
  return NULL;
}

float argmax(float X[]) {
	const int N = sizeof(X) / sizeof(float);
	return distance(X, max_element(X, X + N))
}

float SIGMOID(float x) {
	return (1.0f / (1 + exp(-x)));
}

float RELU(float x) {
	return (x > 0 ? x : 0);
}

void SOFTMAX(float y[]) {
	float y_sum;
	const int N = sizeof(y) / sizeof(float);
	float ymax = max_element(y, y + N);
	for(int f = 0; f < OL_N; f++)
		y[f] = exp(y[f] - ymax);
	for(int f = 0; f < OL_N; f++)
		y_sum += y[f];
	for(int f = 0; f < OL_N; f++)
		y[f] /= y_sum;
}

void mult_mat(float bias[], float firstMatrix[][], float secondMatrix[][], float mult[][], int rowFirst, int columnFirst, int rowSecond, int columnSecond)
{
	int i, j, k;

	// Initializing elements of matrix mult to 0.
	for(i = 0; i < rowFirst; ++i)
	{
		for(j = 0; j < columnSecond; ++j)
		{
			mult[i][j] = 0;
		}
	}

	// Multiplying matrix firstMatrix and secondMatrix and storing in array mult.
	for(i = 0; i < rowFirst; ++i)
	{
		for(j = 0; j < columnSecond; ++j)
		{
			for(k=0; k<columnFirst; ++k)
			{
				mult[i][j] += firstMatrix[i][k] * secondMatrix[k][j];
			}
			mult[i][j] += bias[j]
		}
	}
}

// Free the resources allocated during initialization
void cleanup() {
 printf("CLEAN UP DONE!\n");
}

/////// 3 Layer NN CLASS MEMBER FUNCTION IMPLEMENTATIONS ////////
////
//
void THREE_Layer_NN::start()
{
  init();
  run();
}

// Initialize the kernel, queue and data for the problem. Requires num_devices to be known.
void THREE_Layer_NN::init() {
	for(int i = 0; i < T_test_x; i++) {
		label_digit[i] = argmax(T_test[i]);
		pred_digit[i] = 0;}
	cout << "Initialized";
}

void THREE_Layer_NN::run() {
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

    printf("Launching calculation");
  
	FORWARD_PASS();
  
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

	VERIFICATION();
 
    FILE *file1 = fopen(OUT_F_NAME, "w");
    assert(file1);
	fprintf(file1, "3 LAYER NN MNIST CLASSIFICATION\n");
	fprintf(file1, "ACCURACY: %f AV_CERTAINTY: %f \n", accuracy, av_certainty);
    fprintf(file1, "LABEL\tPREDICTION\tCERTAINTY\n");
    for(unsigned j = 0; j < T_test_x; ++j) {
      fprintf(file1, "%f\t%f\t%f\n", label_digit[j], pred_digit[j], certainty[j]);
    }
    fclose(file1);
}

void THREE_Layer_NN::SOFTMAX_LAYER() {
	for(int i = 0;i < T_test_x; i++)
		SOFTMAX(Y[i]);
}

void THREE_Layer_NN::RELU_LAYER() {
	for(int i = 0;i < T_test_x; i++)
		for(int j = 0;j < HL_1_N; j++)
			F_HL_1[i][j] = RELU(F_HL_1[i][j]);
}

void THREE_Layer_NN::SIGMOID_LAYER() {
	for(int i = 0;i < T_test_x; i++)
		for(int j = 0;j < HL_2_N; j++)
			F_HL_2[i][j] = SIGMOID(F_HL_2[i][j]);
}

void THREE_Layer_NN::LINEAR_LAYER(float IN[][], float W[][], float B[], float OUT[][]) {
	int row_in, row_W, col_in, col_W;
	row_in = sizeof(IN)/sizeof(IN[0]);
	row_W = sizeof(W)/sizeof(W[0]);
	col_in = sizeof(IN[0])/sizeof(IN[0][0]);
	col_W = sizeof(W[0])/sizeof(W[0][0]);
	mult_mat(B, IN, W, OUT, row_in, col_in, row_W, col_W);
}

void THREE_Layer_NN::FORWARD_PASS() {
	cout << "FORWARD PASS BEGINS!";
	LINEAR_LAYER(X_test, W_HL_1, B_HL_1, F_HL_1);
	RELU_LAYER();
	LINEAR_LAYER(F_HL_1, W_HL_2, B_HL_2, F_HL_2);
	SIGMOID_LAYER();
	LINEAR_LAYER(F_HL_2, W_OL, B_OL, Y);
	SOFTMAX_LAYER();
	cout << "FORWARD PASS IS DONE!";
}

void THREE_Layer_NN::VERIFICATION() {
	get_accuracy(T_test);
	get_certainty();
	cout << "VERIFICATION: accuracy: " << accuracy << " certainty: " << certainty;
	
}

void THREE_Layer_NN::get_accuracy(float T[][]) {
	int true_pred = 0;
    for(int i = 0; i < T_test_x; i++):
        pred_digit[i] = argmax(Y[i]);
        if (pred_digit[i] == label_digit[i])
            true_pred ++;
    accuracy = (true_pred/ T_test_x)*100
}

void THREE_Layer_NN::get_certainty() {
	float sum;
    for(int i = 0; i < T_test_x; i++):
        certainty.push_back((max_element(begin(Y[i]), end(Y[i])))*100)
    for(vector<float>::iterator it = certainty.begin(); it != certainty.end(); ++it)
		sum += *it;
	av_certainty = sum / (float) T_test_x;
}	


