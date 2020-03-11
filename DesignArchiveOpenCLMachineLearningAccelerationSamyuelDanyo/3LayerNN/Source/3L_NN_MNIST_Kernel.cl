//////////////////////////////////////////////////////////////////
//Made by Samyuel Danyo on 06/11/2017
/////////////////////////////////////////////////////////////////
//This is OpenCL ACL kernel implementing a 3 Layer NN classification of 
//MNIST handwritten dataset. It is written for altera FPGA, synthesized with
//altera SDK

#ifndef three_layer_nn_glb
#define three_layer_nn_glb
#define cl_khr_fp64
#endif

#ifdef cl_khr_fp64
    #pragma OPENCL EXTENSION cl_khr_fp64 : enable
#elif defined(cl_amd_fp64)
    #pragma OPENCL EXTENSION cl_amd_fp64 : enable
#else
    #error "Double precision floating point not supported by OpenCL implementation."
#endif

//Channels can be used only with altera FPGA OpenCL SDK, for other SDKs
//channels need to be replaced with pipes
//Channeled kernels cannot be vectorized with SIMD, as that may result in
//Multiple CU trying to write the same channel.
//#pragma OPENCL EXTENSION cl_altera_channels : enable

channel float OUT_HL_1;
channel float OUT_HL_2;

#define wg_size 1
#define INPUT_N 784
#define HL_1_N 500
#define HL_2_N 150
#define OL_N 10
#define RELU(x) (x > 0 ? x : 0)
#define SIGMOID(x) (1.0f / (1 + exp(-x)))
//#define W_HL_1(f,n) W_HL_1[f*HL_1_N + n]
//#define W_HL_2(f,n) W_HL_2[f*HL_2_N + n]
//#define W_OL(f,n) W_OL[f*OL_N + n]
//#define X_test(x,y) X_test[x*INPUT_N + y]
#define Y(x,y) Y[x*OL_N + y]

__kernel
//if there is more then 1 device the required wg_size needs to be changed!
//__attribute__((reqd_work_group_size(wg_size, 1, 1)))
void HL_1_RELU(__constant float *restrict X_test,
		__constant float *restrict W_HL_1,
		__constant float *restrict B_HL_1)
{
	// Get index of the work item (offset within the NDRange)
	int img = get_global_id(0);

	__local float activation;
//	printf("Starting Image: %d",img);
	// n for neuron index, f for feature index
	//#pragma unroll
	for(int n = 0; n < HL_1_N; n++)
	{	
		activation = 0.0f;
		//#pragma unroll
		for(int f = 0; f < INPUT_N; f++)
		{
			activation += X_test[img*INPUT_N + f] * W_HL_1[n*INPUT_N + f];
		}
		activation += B_HL_1[n];
		activation = RELU(activation);
		write_channel_altera(OUT_HL_1, activation);
	}
}

__kernel
//if there is more then 1 device the required wg_size needs to be changed!
//__attribute__((reqd_work_group_size(wg_size, 1, 1)))
void HL_2_SIG(__constant float *restrict W_HL_2,
		__constant float *restrict B_HL_2)
{
	// The offset within the NDRange (which image is processed is implied via the channel)

	__local float activation;
	__local float features[HL_1_N];
	// n for neuron index, f for feature index
	//#pragma unroll
	for(int f = 0; f < HL_1_N; f++)
	{
		features[f] = read_channel_altera(OUT_HL_1);
	}
	
	//#pragma unroll
	for(int n = 0; n < HL_2_N; n++)
	{	
		activation = 0.0f;
		//#pragma unroll
		for(int f = 0; f < HL_1_N; f++)
		{
			activation += features[f] * W_HL_2[n*HL_1_N + f];
		}
		activation += B_HL_2[n];
		activation = SIGMOID(activation);
		write_channel_altera(OUT_HL_2, activation);
	}
}

__kernel
//if there is more then 1 device the required wg_size needs to be changed!
//__attribute__((reqd_work_group_size(wg_size, 1, 1)))
void OL_SOFTMAX(__constant float *restrict W_OL,
		__constant float *restrict B_OL,
		__global float *restrict Y)
{
	// The offset within the NDRange (which image is processed is implied via the channel)

	int img = get_global_id(0);
	__local float activation;
	__local float features[HL_2_N];
	// n for neuron index, f for feature index
	//#pragma unroll
	for(int f = 0; f < HL_2_N; f++)
	{
		features[f] = read_channel_altera(OUT_HL_2);
	}
	
	//#pragma unroll
	for(int n = 0; n < OL_N; n++)
	{	
		activation = 0.0f;
		//#pragma unroll
		for(int f = 0; f < HL_2_N; f++)
		{
			activation += features[f] * W_OL[n*HL_2_N + f];
		}
		activation += B_OL[n];
		Y(img,n) = activation;
	}
}
