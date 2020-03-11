#ifndef TEST_DATA_H
#define TEST_DATA_H

#if !defined(T_test_R) 
#include "T_TEST_DATA.h" 
#endif
#if !defined(X_test_R) 
#include "X_TEST_DATA.h" 
#endif 

#ifndef T_test_R
printf("Target Labels are Not Defined!")
#endif
#ifndef X_test_R
printf("Input Samples are not Defined!")
#endif

#endif
