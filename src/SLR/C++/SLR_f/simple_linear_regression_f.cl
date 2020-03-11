/////////////////////////////////////////////////////////////////
//Made by Samyuel Danyo on 06/11/2017
/////////////////////////////////////////////////////////////////
//This is OpenCL ACL kernel implementing a simple Linear Regression
//neuron behavior. It is written for Intel FPGA, synthesized with
//Intel SDK

__kernel void simple_linear_regression_f(__constant float *restrict weights,
			      __constant float *restrict features,
                       	             __global float *restrict y)
{
	// Get index of the work item
	int index = get_global_id(0);

	// Executiong our inference
	y[index] = features[4 * index] * weights[0] + features[4 * index + 1] * weights[1] + features[4 * index + 2] * weights[2] + features[4 * index + 3] * weights [3];

}

