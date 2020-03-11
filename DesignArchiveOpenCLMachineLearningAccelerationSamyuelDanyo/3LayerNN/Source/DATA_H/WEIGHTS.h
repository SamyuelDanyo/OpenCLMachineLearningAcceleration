#ifndef WEIGHTS_H
#define WEIGHTS_H

#if !defined(B_HL_1_R) 
#include "ReLU_SG_HL_1_b.h" 
#endif
#if !defined(B_HL_2_R) 
#include "ReLU_SG_HL_2_b.h" 
#endif
#if !defined(B_OL_R) 
#include "ReLU_SG_OL_b.h"
#endif
#if !defined(W_HL_1_R) 
#include "ReLU_SG_HL_1_W.h"
#endif
#if !defined(W_HL_2_R) 
#include "ReLU_SG_HL_2_W.h"
#endif
#if !defined(W_OL_R) 
#include "ReLU_SG_OL_W.h"
#endif

#ifndef B_HL_1_R
printf("HL 1 Bias is Not Defined!")
#endif
#ifndef B_HL_2_R
printf("HL 2 Bias is Not Defined!")
#endif
#ifndef B_OL_R
printf("OL Bias is Not Defined!")
#endif
#ifndef W_HL_1_R
printf("HL 1 Weights are Not Defined!")
#endif
#ifndef W_HL_2_R
printf("HL 2 Weights are Not Defined!")
#endif
#ifndef W_OL_R
printf("OL Weights are Not Defined!")
#endif

#endif
