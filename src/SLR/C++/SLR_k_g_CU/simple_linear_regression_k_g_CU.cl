//////////////////////////////////////////////////////////////////
//Made by Samyuel Danyo on 06/11/2017
/////////////////////////////////////////////////////////////////
//This is OpenCL ACL kernel implementing a simple Linear Regression
//neuron behavior. It is written for Intel FPGA, synthesized with
//Intel SDK

__attribute__((reqd_work_group_size(10000, 1, 1)))
__attribute__((num_compute_units(4)))
__kernel void simple_linear_regression(__constant float *restrict x,
                       		__global float *restrict y)
{
	// Weights vector
	__local float weights[4];
	weights[0] = -0.55395846;
	weights[1] = 1;
	weights[2] = 10;
        weights[3] = 8.94836441;
	// Get index of the work item
	int index = get_global_id(0);

	// Creating the design vector
	__local float features[4];
	features[0] = 1;
	features[1] = x[index];
	features[2] = sin(3 * x[index]);
        features[3] = exp(-1 * x[index] * x[index]);

	// Executiong our inference
	y[index] = features[0] * weights [0] + features[1] * weights [1] + features[2] * weights [2] + features[3] * weights [3];

}

