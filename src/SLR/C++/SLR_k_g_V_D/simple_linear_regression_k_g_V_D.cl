//////////////////////////////////////////////////////////////////
//Made by Samyuel Danyo on 06/11/2017
/////////////////////////////////////////////////////////////////
//This is OpenCL ACL kernel implementing a simple Linear Regression
//neuron behavior. It is written for Intel FPGA, synthesized with
//Intel SDK
//Data parallelism trough vector data type.

__attribute__((reqd_work_group_size(10000, 1, 1)))
__kernel void simple_linear_regression(__constant float4 * restrict x,
                       		__global float4 * restrict y)
{
	// Weights vector
	__local float4  weights;
	weights = (float4) (-0.55395846, 1, 10, 8.94836441);
	// Get index of the work item
	int index = get_global_id(0);

	// Creating the design vector
	__local float4 features[4];
	features[0] = (float4) (1, x[index].s0, sin(3 * x[index].s0), exp(-1 * x[index].s0 * x[index].s0));
	features[1] = (float4) (1, x[index].s1, sin(3 * x[index].s1), exp(-1 * x[index].s1 * x[index].s1));
	features[2] = (float4) (1, x[index].s2, sin(3 * x[index].s2), exp(-1 * x[index].s2 * x[index].s2));
    features[3] = (float4) (1, x[index].s3, sin(3 * x[index].s3), exp(-1 * x[index].s3 * x[index].s3));

	// Executiong our inference
	y[index].s0 = features[0].s0 * weights.s0 + features[0].s1 * weights.s1 + features[0].s2 * weights.s2 + features[0].s3 * weights.s3;
	y[index].s1 = features[1].s0 * weights.s0 + features[1].s1 * weights.s1 + features[1].s2 * weights.s2 + features[1].s3 * weights.s3;
	y[index].s2 = features[2].s0 * weights.s0 + features[2].s1 * weights.s1 + features[2].s2 * weights.s2 + features[2].s3 * weights.s3;
	y[index].s3 = features[3].s0 * weights.s0 + features[3].s1 * weights.s1 + features[3].s2 * weights.s2 + features[3].s3 * weights.s3;

}

