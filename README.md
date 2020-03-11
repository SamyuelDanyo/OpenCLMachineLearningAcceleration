# OpenCLMachineLearningAcceleration
OpenCL Machine Learning Acceleration on FPGA using Intel FPGA OpenCL SDK.
Custom designed Simple Linear Regression and 3-Layer Neural Network for MNIST classification
implemented for training in Python, benchmark inference in C++ and inference accelerationn in C++/OpenCL.
Full Report outlining sytem architecture, design, experiment and findings + full source code are included.
Full build for computer emulation and FPGA acceleration are provided.
Information on how to run Jupyter Notebook Python code, .py Python scripts, C++ implementation and the heterogenious C++/OpenCL code can be found in the README-s, as well as further documentation including "Step-by-Step Guide for Running OpenCL Applications on Intel FPGAs" can be found in my report.


## Python Implementation Results:

![Simple Linear Regression Plot](https://github.com/SamyuelDanyo/OpenCLMachineLearningAcceleration/blob/master/res/slr_plot.png)

![3L_NN_MNIST Cost](https://github.com/SamyuelDanyo/OpenCLMachineLearningAcceleration/blob/master/res/nn_cost_convergence.PNG)

![3L_NN_MNIST Accuracy](https://github.com/SamyuelDanyo/OpenCLMachineLearningAcceleration/blob/master/res/nn_accuracy.PNG)

![3L_NN_MNIST Confusion](https://github.com/SamyuelDanyo/OpenCLMachineLearningAcceleration/blob/master/res/nn_test_confusion.PNG)

![3L_NN_MNIST Prediction](https://github.com/SamyuelDanyo/OpenCLMachineLearningAcceleration/blob/master/res/nn_test_predict.PNG)


## Acceleration Kernel Architecture

#### Simple Linear Regression
![Simple Linear Regression Kernel Arch](https://github.com/SamyuelDanyo/OpenCLMachineLearningAcceleration/blob/master/res/slr_kernel_arch.PNG)

#### 3-Layer Neural Network
![3L_NN_MNIST Kernel Arch](https://github.com/SamyuelDanyo/OpenCLMachineLearningAcceleration/blob/master/res/nn_kernel_arch.PNG)

__For further information and result plots please check below.__

| Abstract |
------------ 
With the tremendous advance of Machine Learning (ML) in the last ten years, its popularity has peaked. Artificial Intelligence’s (AI) advantages over conventional programming are fascinating students, researchers and the big corporations all the same. The largest spotlight is taken by the applications of Convolutional Neural Networks (CNN) in natural speech recognition, computer vision and data classification. These ML methods are seen as a crucial driving force behind a connected smart world or in other words the Internet of Things (IoT). 

However, problems arise if an affordable intelligent system needs to be implemented. The high-functioning Graphics Processing Units (GPUs) and Central Processing Units (CPUs), which are currently used for ML computation, are not power-efficient enough.
In this report I explore Field-Programmable Gate Array (FPGA) ML acceleration, using The High-Level Synthesis (HLS) tool - Intel FPGA SDK for OpenCL, as a possible solution to this problem.

Initially a Simple Linear Regression (SLR) model, implemented in multiple variations is studied. I test the performance and accuracy of the FPGA-accelerated system compared to a CPU-based benchmark. Based on the experiment’s results I outline the benefits, drawbacks and best development practices for implementing Machine Learning applications in OpenCL for FPGAs.

Finally, I discuss the implementation of a four-layer Neural Network, classifying images of hand-written digits (MNIST dataset). I study the complexities of implementing a Neural Network in OpenCL for FPGA acceleration, the disadvantages of the approach and the possible benefits. 

| Introduction and Motivation |
-------------------------------
__1.1 Why Machine Learning?__

The Machine Learning (ML) field solves problems, too complex to be explicitlyprogrammed, by creating algorithms, which through the process of trial and error [1] learn models, mapping input data to a desired output [2].

Powerful example of a ML application is in the field of science dealing with how computers can understand images, called computer vision (CV). While for humans it is easy to distinguish a cat in a picture, this task is extremely hard for a computer. There are unlimited combinations of different cats in different surroundings. Even capturing the same cat in the same room, over time produces a vast set of different images. If this problem is approached with conventional programming methods or statistics, every possible picture of all cats needs to be labeled and explicitly coded for a computer to be able to make a decision if in a random image there is a cat or not. However, labeling all pictures is impossible and this is where the greatest advantage of ML comes in. Through a limited set of cat and not-cat images (training set) a ML algorithm is able to detect patterns and produce a model, which we as humans cannot understand but when a random image is presented, the computer is able to gain understanding through it and make a decision.

__1.2 Why Machine Learning needs to be accelerated?__

One type of ML algorithms is called Neural Networks (NN) [3]. They analyze gigantic amounts of input data, tuning the model on every iteration, until aimed accuracy is achieved [4]. During both: training and processing real, previously unseen, data (inference), NNs need huge amounts of computing power.

Convolutional Neural Networks (CNN) are a type of Deep Neural Networks (DNN) [5]. They are a family of ML algorithms, which is suited for solving some of the most complex problems like image classification (example above), natural speech recognition and cognitive computer functions. They implement long and complex data processing flow, called Deep Learning (DL) [6]. Currently, most of the research and commercial interest is focused on CNNs, because they show the greatest promise for solving extremely complex problems, which can make innovations like smart cities a reality. CNNs are already being used in the most advanced AI systems in: IoT, intelligent assistants, autonomous driving, androids, Fintech software etc.

In general, training and inference of DNNs are carried out on a state-of-the-art General-Purpose (GP) hardware like GPUs and CPUs. One thing is certain - ML usage will continue expanding exponentially, which is the reason why reliable, secure and power-efficient hardware platforms need to be developed simultaneously [7][6].
 
Current smart technologies, utilizing ML, communicate most of their data to cloudcomputing data centers, where most of the processing happens. This results in long latencies and big bandwidth requirements. Nevertheless, some scientists believe that in the coming future, the advance in Artificial Intelligence would require lower latency and hence more local computing. Such data-processing, on the edge of the network, is called Edge Computing [8]. It leverages resources of the devices, connected to the network (for example smartphones, laptops, smart TV and any other smart technology in your home) to process data. [8][9]

I also share this belief, especially considering use-cases such as smart secure systems, AI assistants, autonomous driving or health-related applications. All of these systems need to convey instantaneous decision making, be highly reliable, keep data secure and learn in real time. Doing processing on the edge will lower latency, reduce the communications bandwidth and make systems more reliable as they do not depend on remote connections. Another important advantage is greater privacy and security as most of the data will not leave a certain perimeter (for example your home). Privacy and data handling will increasingly become more important pressing point as AI advances.

Edge Computing delivers another reason for the development of better ML and bigdata processing systems. Utilizing heterogeneous computing API frameworks can be the key to efficient edge computing systems (gateways), which will be leveraging the advantages of a symbiosis between different types of processors.

__1.3 Accelerator requirements.__

Nevertheless, even with the tremendous progress in Processing Units (PU) and the ever-cheaper computing power, the price, as well as, environmental cost of implementing AI systems [10] are too high for mass market.

General Purpose Processing Units (GPPU) have the advantage of flexibility - being able to run various software, which is crucial for the fast innovation cycle of ML. However, that same advantage brings drawbacks, as the cost for being GP is subsystems that are not needed for every application but still draw power and increase latency. Furthermore, there is little visibility into the processing data flow, preventing developers from taking advantage of software specifics. The results are: lower speed and higher power usage. For bringing ML to complex, real-life uses, an extremely power-efficient solution with extended hardware-configuration control is needed. However, it still needs to be flexible, allowing the execution of various software, incorporating the fast innovation in ML.

__1.4 Possible solutions.__

While in the past, most of the technological innovation has been in hardware, in the last twenty years it has shifted to software, with ML being the brightest example. This is due to physical limitations, as well as, cost. Previously, if a person wanted to upgrade to the next generation of technology, they needed to buy the new, better device. This results in cumbersome hardware innovation cycle, slowing its propagation through society. In contrast, software provides better flexibility, bottlenecks are easier overcome and there not big overhead manufacturing costs or production time. Furthermore, all users can download the new application on their, already owned, device in a day. Despite all of the points made above, usually, either GP hardware is used or software is designed for a particular hardware. I believe the opposite approach is more logical – designing hardware, customized for a particular application. This can drive faster innovation process, increase power-efficiency and make use of the software’s specifications, avoiding unnecessary parts in the system. 
 
One solution to the problem is designing Application-Specific Integrated Circuits (ASIC). However, while they deliver incomparable power-efficiency and data-flow control, ASICs introduce the above-mentioned hardware limitations. Taking into account the rate of innovation in ML, a flexible platform that can be easily updated to the next generation of AI systems is needed. The targeted platform needs to incorporate the advantages of both GPPU and ASICs. That is why, I believe a possible solution could be FPGA acceleration. FPGAs deliver on both: greater power-efficiency and reconfigurability, giving flexibility to the implementation. Furthermore, with the recent advances in FPGA technology they perform better than ever in floating-point operations and can fit bigger designs. The efficient processing of ML applications requires a lot of data and task parallelism, as well as, vectorization of the data accesses and computation. FPGA architecture is extremely well suited for this, while operating with very high internal memory bandwidth. Last but not least, with the help of Open Computing Language (OpenCL) [11], FPGA implementations, give almost full control over the data flow. This delivers unprecedented opportunities of customization and optimization, allowing the subsystems to complement each other’s strengths. Data flow visibility could significantly improve the power-efficiency of complex AI systems.

OpenCL makes hardware design faster by abstracting its low-level complexities, allowing the focus to be on functionality - similarly to software development. It bridges the gap between software and hardware, as well as, between different hardware platforms, making the implementations portable and more powerful. Intel FPGA SDK for OpenCL [12] brings another degree of freedom to the process, by automating optimization and synthesis of hardware and interfacing.

__Based on the points made above the objectives of this project are:__
  Implementing a ML algorithm in OpenCL for FPGA acceleration.
  Studying the OpenCL framework’s function in heterogenous system of a host-CPU and a FPGA-accelerator.
  Testing if FPGA computing can provide a boost to ML applications’ performance.

## OpenCL:

![OpenCL Acceleration](https://github.com/SamyuelDanyo/OpenCLMachineLearningAcceleration/blob/master/res/normal_accelerated_app_comp.PNG)

![OpenCL Compilation](https://github.com/SamyuelDanyo/OpenCLMachineLearningAcceleration/blob/master/res/opencl_app_compilation.PNG)


## SLR Acceleration Plots:
![SLR Accelerated inference](https://github.com/SamyuelDanyo/OpenCLMachineLearningAcceleration/blob/master/res/opencl_slr_inference.png)

![SLR Accelerated inference Errors](https://github.com/SamyuelDanyo/OpenCLMachineLearningAcceleration/blob/master/res/opencl_slr_inference_errors.png)


## SLR Acceleration Results:

![SLR Kernel Time](https://github.com/SamyuelDanyo/OpenCLMachineLearningAcceleration/blob/master/res/kernel_time.PNG)

![SLR Kernel Logic](https://github.com/SamyuelDanyo/OpenCLMachineLearningAcceleration/blob/master/res/logic.PNG)

![SLR Kernel Logic Efficiency](https://github.com/SamyuelDanyo/OpenCLMachineLearningAcceleration/blob/master/res/logic_eff.PNG)

![SLR Kernel Speed Logic Efficiency](https://github.com/SamyuelDanyo/OpenCLMachineLearningAcceleration/blob/master/res/s_log_eff.PNG)
