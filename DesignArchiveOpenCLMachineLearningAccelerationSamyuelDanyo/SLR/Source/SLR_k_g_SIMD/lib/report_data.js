var loopsJSON={
  "columns":["Pipelined", "II", "Bottleneck"]
  , "functions":
  [
  ]
}
;var mavJSON={
  "nodes":
  [
    {
      "type":"kernel"
      , "id":9
      , "name":"simple_linear_regression"
      , "file":""
      , "line":"0"
      , "children":[
        {
          "type":"bb"
          , "id":3
          , "name":"Block0"
          , "file":""
          , "line":"0"
          , "children":[
            {
              "type":"inst"
              , "id":4
              , "name":"Load"
              , "file":"1"
              , "line":"25"
              , "details":
              {
                "Width":"128 bits"
                , "Type":"Pipelined"
                , "Stall-free":"No"
                , "Start-Cycle":"1"
                , "Latency":"9"
              }
            }
            , {
              "type":"inst"
              , "id":5
              , "name":"Store"
              , "file":"1"
              , "line":"30"
              , "details":
              {
                "Width":"128 bits"
                , "Type":"Streaming"
                , "Stall-free":"No"
                , "Start-Cycle":"81"
                , "Latency":"2"
              }
            }
            , {
              "type":"inst"
              , "id":6
              , "name":"end"
              , "file":"1"
              , "line":"32"
              , "details":
              {
                "Start-Cycle":"83"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":7
              , "name":"begin"
              , "file":""
              , "line":""
              , "details":
              {
                "Start-Cycle":"0"
                , "Latency":"1"
                , "Additional Info":"Entrance to a basic block. Control flow comes to this node from one or more branch nodes, unless it's the very first merge node in a kernel. There is no control branching between merge and branch node within the same basic block."
              }
            }
          ]
          , "details":
          {
            "Latency":"84"
          }
        }
      ]
    }
    , {
      "type":"memtype"
      , "id":10
      , "name":"Global Memory"
      , "file":""
      , "line":"0"
      , "children":[
        {
          "type":"memsys"
          , "id":11
          , "name":""
          , "file":""
          , "line":"0"
          , "replFactor":"0"
          , "banks":1
          , "pumping":0
          , "children":[
            {
              "type":"bank"
              , "id":12
              , "name":"Bank 0"
              , "file":""
              , "line":"0"
            }
          ]
        }
      ]
    }
  ]
  ,
  "links":
  [
    {
      "from":7
      , "to":4
    }
    ,
    {
      "from":4
      , "to":5
    }
    ,
    {
      "from":5
      , "to":6
    }
    ,
    {
      "from":5
      , "to":12
    }
  ]
  , "fileIndexMap":
  {
    "h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_SIMD/device/simple_linear_regression_k_g_SIMD.cl":"1"
  }
}
;var areaJSON={
  "columns":["ALUTs", "FFs", "RAMs", "DSPs"]
  , "debug_enabled":1
  , "total_percent":
  [39.8579, 22.1042, 19.3147, 20.2335, 64.2857]
  , "total":
  [24220, 42327, 104, 72]
  , "name":"Kernel System"
  , "max_resources":
  [109572, 219144, 514, 112]
  , "partitions":
  [
  ]
  , "resources":
  [
    {
      "name":"Board interface"
      , "data":
      [2160, 1908, 20, 0]
      , "details":
      [
        "Platform interface logic."
      ]
    }
    , {
      "name":"Global interconnect"
      , "data":
      [555, 5381, 0, 0]
      , "details":
      [
        "Global interconnect for 0 global loads and 1 global store."
      ]
    }
    , {
      "name":"Constant cache interconnect"
      , "data":
      [554, 7440, 29, 0]
      , "details":
      [
        "16384 bytes constant cache accessible to all kernels and is persistent across kernel invocations. Data inside the cache is replicated 1 time to support 1 reads. Cache optimized for hits, misses incur a large penalty. If amount of data in the cache is small, consider passing it by value as a kernel argument. Use Dynamic Profiler to check stalls on accesses to the cache to assess the cache's effectiveness. Profiling actual cache hit rate is currently not supported.\n"
      ]
    }
  ]
  , "functions":
  [
    {
      "name":"simple_linear_regression"
      , "compute_units":1
      , "details":
      [
        "Achieved kernel vectorization: 4"
        , "Number of compute units: 1"
      ]
      , "resources":
      [
        {
          "name":"Function overhead"
          , "data":
          [1570, 1685, 0, 0]
          , "details":
          [
            "Kernel dispatch logic."
          ]
        }
      ]
      , "basicblocks":
      [
        {
          "name":"Block0"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [4476.99, 9449.97, 10, 0]
              , "details":
              [
                "Resources for live values and control logic. To reduce this area:\n- reduce size of local variables\n- reduce scope of local variables, localizing them as much as possible\n- reduce number of nested loops"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Control flow logic"
                    , "data":
                    [32, 32, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [49, 219, 2, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"simple_linear_regression_k_g_SIMD.cl:25"
                    , "data":
                    [60, 60, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_SIMD/device/simple_linear_regression_k_g_SIMD.cl"
                          , "line":25
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"simple_linear_regression_k_g_SIMD.cl:26"
                    , "data":
                    [738.667, 1593.33, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_SIMD/device/simple_linear_regression_k_g_SIMD.cl"
                          , "line":26
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"simple_linear_regression_k_g_SIMD.cl:27"
                    , "data":
                    [362.333, 706.167, 4.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_SIMD/device/simple_linear_regression_k_g_SIMD.cl"
                          , "line":27
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"simple_linear_regression_k_g_SIMD.cl:30"
                    , "data":
                    [3235, 6839.51, 3.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_SIMD/device/simple_linear_regression_k_g_SIMD.cl"
                          , "line":30
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Cluster logic"
              , "data":
              [346, 630, 2, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"simple_linear_regression_k_g_SIMD.cl:25"
              , "data":
              [102, 68, 1, 0]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_SIMD/device/simple_linear_regression_k_g_SIMD.cl"
                    , "line":25
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [71, 68, 1, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [31, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"simple_linear_regression_k_g_SIMD.cl:26"
              , "data":
              [9104, 12332, 12, 28]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_SIMD/device/simple_linear_regression_k_g_SIMD.cl"
                    , "line":26
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"'sinf' Function Call"
                    , "data":
                    [8420, 12332, 12, 28]
                  }
                  , "count":4
                }
                , {
                  "info":
                  {
                    "name":"And"
                    , "data":
                    [64, 0, 0, 0]
                  }
                  , "count":36
                }
                , {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [564, 0, 0, 0]
                  }
                  , "count":4
                }
                , {
                  "info":
                  {
                    "name":"Or"
                    , "data":
                    [56, 0, 0, 0]
                  }
                  , "count":32
                }
              ]
            }
            , {
              "name":"simple_linear_regression_k_g_SIMD.cl:27"
              , "data":
              [2440, 2180, 16, 40]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_SIMD/device/simple_linear_regression_k_g_SIMD.cl"
                    , "line":27
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"'expf' Function Call"
                    , "data":
                    [2304, 1988, 16, 36]
                  }
                  , "count":4
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [136, 192, 0, 4]
                  }
                  , "count":4
                }
              ]
            }
            , {
              "name":"simple_linear_regression_k_g_SIMD.cl:30"
              , "data":
              [2912, 1253, 14, 4]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_SIMD/device/simple_linear_regression_k_g_SIMD.cl"
                    , "line":30
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Add"
                    , "data":
                    [8, 0, 0, 0]
                  }
                  , "count":16
                }
                , {
                  "info":
                  {
                    "name":"And"
                    , "data":
                    [64, 0, 0, 0]
                  }
                  , "count":32
                }
                , {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [2168, 0, 0, 0]
                  }
                  , "count":16
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [40, 164, 0, 4]
                  }
                  , "count":4
                }
                , {
                  "info":
                  {
                    "name":"Or"
                    , "data":
                    [56, 0, 0, 0]
                  }
                  , "count":40
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [31, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [545, 1089, 14, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
;var fileJSON=[{"index":0, "path":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_SIMD/device/simple_linear_regression_k_g_SIMD.cl", "name":"simple_linear_regression_k_g_SIMD.cl", "content":"//////////////////////////////////////////////////////////////////\012//Made by Samyuel Danyo on 06/11/2017\012/////////////////////////////////////////////////////////////////\012//This is OpenCL ACL kernel implementing a simple Linear Regression\012//neuron behavior. It is written for Intel FPGA, synthesized with\012//Intel SDK\012\012__attribute__((reqd_work_group_size(10000, 1, 1)))\012__attribute__((num_simd_work_items(4)))\012__kernel void simple_linear_regression(__constant float *restrict x,\012                       		__global float *restrict y)\012{\012	// Weights vector\012	__local float weights[4];     //Maybe those will need to be in vector data type float16\012	weights[0] = -0.55395846;\012	weights[1] = 1;\012	weights[2] = 10;\012        weights[3] = 8.94836441;\012	// Get index of the work item\012	int index = get_global_id(0);\012\012	// Creating the design vector\012	__local float features[4];     //Maybe those will need to be in vector data type float16\012	features[0] = 1;\012	features[1] = x[index];\012	features[2] = sin(3 * x[index]);\012        features[3] = exp(-1 * x[index] * x[index]);\012\012	// Executiong our inference\012	y[index] = features[0] * weights [0] + features[1] * weights [1] + features[2] * weights [2] + features[3] * weights [3];\012\012}\012\012"}];