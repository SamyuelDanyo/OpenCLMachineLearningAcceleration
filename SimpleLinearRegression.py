#!/usr/bin/env python
# 
#  Creator: Samyuel Danyo
#  Date: 10/2017
# coding: utf-8

from __future__ import division, print_function, unicode_literals
import os
import numpy as np
import matplotlib.pyplot as plt
def chf(x, n):                     # The basis function to be used. This is how our training Y relates to input X.
    return np.cos(n*np.arccos(x))  # In real life we do not have the exact function, only inputs and outputs.
X1pts = 200                        # Training points
X1lin = np.linspace(-1,0,X1pts)     # Training interval (training input variable values)
y1 = chf(X1lin, 1)+0.03*np.random.normal(0,1,X1pts)# Training results, our Ys (our labels)
X1ptsPred = 400                    # Prediction points
X1linPred = np.linspace(-1,1,X1ptsPred)# Prediction interval (real input variable values)
y1True = chf(X1linPred,1)+0.03*np.random.normal(-1,1,X1ptsPred)# True results for the prediction interval (for verification)
Achf = np.stack((np.ones(X1pts),X1lin)).T # Constructing design matrix
AchfPred = np.stack((np.ones(X1ptsPred),X1linPred)).T # Prediction design matrix
w1hat = np.linalg.pinv(Achf).dot(y1) #Training our weights
y1pred = AchfPred.dot(w1hat)         # Making our prediction, based on the weights

plt.plot(X1linPred,y1pred)              # Displaying our Prediction (regression) in Blue
plt.scatter(X1linPred,y1True, color='y')# Displaying our true values in Yellow
plt.scatter(X1lin,y1, color='r')        # Displaying our trainign vlaues in Red
plt.show()

print(np.array(y1).shape)

y1 = chf(X1lin, 2)+0.03*np.random.normal(0,1,X1pts)# Training results, our Ys
X1ptsPred = 400                    # Prediction points
X1linPred = np.linspace(-1,1,X1ptsPred)# Prediction interval
y1True = chf(X1linPred,2)+0.03*np.random.normal(-1,1,X1ptsPred)# True results for the prediction interval
Achf = np.stack((np.ones(X1pts),X1lin)).T # Constructing design matrix
AchfPred = np.stack((np.ones(X1ptsPred),X1linPred)).T # Prediction design matrix
w1hat = np.linalg.pinv(Achf).dot(y1) #Training our weights
y1pred = AchfPred.dot(w1hat)         # Making our prediction, based on the weights

plt.plot(X1linPred,y1pred)              # Displaying our Prediction (regression) in Blue
plt.scatter(X1linPred,y1True, color='y')# Displaying our true values in Yellow
plt.scatter(X1lin,y1, color='r')        # Displaying our trainign vlaues in Red
plt.show()

X1pts = 40                        # Training points
X1lin = np.linspace(-1,0,X1pts)     # Training interval
y1 = chf(X1lin, 2)+0.03*np.random.normal(0,1,X1pts)# Training results, our Ys
X1ptsPred = 80                    # Prediction points
X1linPred = np.linspace(-1,1,X1ptsPred)# Prediction interval
y1True = chf(X1linPred,2)+0.03*np.random.normal(-1,1,X1ptsPred)# True results for the prediction interval
Achf = np.stack((np.ones(X1pts),X1lin,np.square(X1lin))).T # Constructing design matrix
AchfPred = np.stack((np.ones(X1ptsPred),X1linPred,np.square(X1linPred))).T # Prediction design matrix
w1hat = np.linalg.pinv(Achf).dot(y1) #Training our weights
y1pred = AchfPred.dot(w1hat)         # Making our prediction, based on the weights

plt.plot(X1linPred,y1pred)              # Displaying our Prediction (regression) in Blue
plt.scatter(X1linPred,y1True, color='y')# Displaying our true values in Yellow
#plt.scatter(X1lin,y1, color='r')        # Displaying our trainign vlaues in Red
plt.show()

X1pts = 40                        # Training points
X1lin = np.linspace(-0.5,0.5,X1pts)     # Training interval
y1 = chf(X1lin, 2)+0.03*np.random.normal(0,1,X1pts)# Training results, our Ys
X1ptsPred = 80                    # Prediction points
X1linPred = np.linspace(-1,1,X1ptsPred)# Prediction interval
y1True = chf(X1linPred,2)+0.03*np.random.normal(-1,1,X1ptsPred)# True results for the prediction interval
Achf = np.stack((np.ones(X1pts),X1lin,np.square(X1lin))).T # Constructing design matrix
AchfPred = np.stack((np.ones(X1ptsPred),X1linPred,np.square(X1linPred))).T # Prediction design matrix
w1hat = np.linalg.pinv(Achf).dot(y1) #Training our weights
y1pred = AchfPred.dot(w1hat)         # Making our prediction, based on the weights

plt.plot(X1linPred,y1pred)              # Displaying our Prediction (regression) in Blue
plt.scatter(X1linPred,y1True, color='y')# Displaying our true values in Yellow
#plt.scatter(X1lin,y1, color='r')        # Displaying our trainign vlaues in Red
plt.show()

def f(x):                          # The basis function to be used. This is how our training Y relates to input X.
 return 0.5*(x)*(x**4)/(.05+(x**4))  # In real life we do not have the exact function, only inputs and outputs.
X1pts = 20                        # Training points
X1lin = np.linspace(0,1,X1pts)     # Training interval
y1 = f(X1lin)+0.03*np.random.normal(0,1,X1pts)# Training results, our Ys
X1ptsPred = 40                    # Prediction points
X1linPred = np.linspace(0,2,X1ptsPred)# Prediction interval
y1True = f(X1linPred)+0.03*np.random.normal(-1,1,X1ptsPred)# True results for the prediction interval
Achf = np.stack((np.ones(X1pts),X1lin,np.square(X1lin))).T # Constructing design matrix
AchfPred = np.stack((np.ones(X1ptsPred),X1linPred,np.square(X1linPred))).T # Prediction design matrix
w1hat = np.linalg.pinv(Achf).dot(y1) #Training our weights
y1pred = AchfPred.dot(w1hat)         # Making our prediction, based on the weights

plt.plot(X1linPred,y1pred)              # Displaying our Prediction (regression) in Blue
plt.scatter(X1linPred,y1True, color='y')# Displaying our true values in Yellow
plt.scatter(X1lin,y1, color='r')        # Displaying our trainign vlaues in Red
plt.show()

def f(x):                          # The basis function to be used. This is how our training Y relates to input X.
 return 0.5*(x)*(x**4)/(.05+(x**4))  # In real life we do not have the exact function, only inputs and outputs.
X1pts = 20                        # Training points
X1lin = np.linspace(0,1,X1pts)     # Training interval
y1 = f(X1lin)+0.03*np.random.normal(0,1,X1pts)# Training results, our Ys
X1ptsPred = 40                    # Prediction points
X1linPred = np.linspace(0,2,X1ptsPred)# Prediction interval
y1True = f(X1linPred)+0.03*np.random.normal(-1,1,X1ptsPred)# True results for the prediction interval
Achf = np.stack((np.ones(X1pts),X1lin)).T # Constructing design matrix
AchfPred = np.stack((np.ones(X1ptsPred),X1linPred)).T # Prediction design matrix
w1hat = np.linalg.pinv(Achf).dot(y1) #Training our weights
y1pred = AchfPred.dot(w1hat)         # Making our prediction, based on the weights

plt.plot(X1linPred,y1pred)              # Displaying our Prediction (regression) in Blue
plt.scatter(X1linPred,y1True, color='y')# Displaying our true values in Yellow
plt.scatter(X1lin,y1, color='r')        # Displaying our trainign vlaues in Red
plt.show()

X1pts = 200                        # Training points
X1lin = np.linspace(-1,0,X1pts)     # Training interval
y1 = chf(X1lin, 2)+0.03*np.random.normal(0,1,X1pts)# Training results, our Ys
X1ptsPred = 400                    # Prediction points
X1linPred = np.linspace(-1,1,X1ptsPred)# Prediction interval
y1True = chf(X1linPred,2)+0.03*np.random.normal(-1,1,X1ptsPred)# True results for the prediction interval
Achf = np.stack((np.ones(X1pts),X1lin,np.square(X1lin))).T # Constructing design matrix
AchfPred = np.stack((np.ones(X1ptsPred),X1linPred,np.square(X1linPred))).T # Prediction design matrix
w1hat = np.linalg.pinv(Achf).dot(y1) #Training our weights
y1pred = AchfPred.dot(w1hat)         # Making our prediction, based on the weights

plt.plot(X1linPred,y1pred)              # Displaying our Prediction (regression) in Blue
plt.scatter(X1linPred,y1True, color='y')# Displaying our true values in Yellow
plt.scatter(X1lin,y1, color='r')        # Displaying our trainign vlaues in Red
plt.show()

print (w1hat)

def slr(x):                               # It is used to create the training set.This is how training Y relates to input X.
 return 10*np.exp(-2*x**2) +np.sin(3*x)*10 +x #The model will need to aproximate this pattern, learning from X and Y.
                              
Xpts = 100                                    # Training points:100
Xlin = np.linspace(-3,3,Xpts)                 # Training interval [-3:3]
Y = slr(Xlin)                            # Training targets, our Ys
Y += 0.7*np.random.normal(0,1,Xpts)           # Noise is added, as in real life, there is always distortion
XptsPred = 200                                # Inference points:200 (the # of points, the learnt model will be tested on, fitting)
XlinPred = np.linspace(-10,10,XptsPred)       # Inference interval [-10:10] Presentation of the power of generalization
YTrue = slr(XlinPred)                     # True labels for the inference interval
YTrue += 0.7*np.random.normal(0,1,XptsPred)   # Will be used to validate the prediction
A = np.stack((np.ones(Xpts), Xlin,            # Constructing the training features (training Design Matrix)
  np.sin(3*Xlin), np.exp(-1*Xlin**2))).T
APred = np.stack((np.ones(XptsPred), XlinPred,# Constructing the inference features (inference Design Matrix)
  np.sin(3*XlinPred), np.exp(-1*XlinPred**2))).T
W = np.linalg.pinv(A).dot(Y)                  # Training the model (weights & bias)
Ypred = APred.dot(W)                          # Doing inference (making a prediction, based on the model)

plt.plot(XlinPred,Ypred)                      # Displaying the prediction (regression) in BLUE
plt.scatter(XlinPred,YTrue, color='y')        # Displaying the true labels in YELLOW
plt.scatter(Xlin,Y, color='r')                # Displaying the training targets in RED
plt.show()
print (W)