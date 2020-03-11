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
                "Width":"32 bits"
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
                "Width":"32 bits"
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
      "from":4
      , "to":5
    }
    ,
    {
      "from":7
      , "to":4
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
    "h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_CU/device/simple_linear_regression_k_g_CU.cl":"1"
  }
}
;var areaJSON={
  "columns":["ALUTs", "FFs", "RAMs", "DSPs"]
  , "debug_enabled":1
  , "total_percent":
  [60.1867, 36.6289, 26.6774, 34.2412, 64.2857]
  , "total":
  [40135, 58462, 176, 72]
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
      [9588, 10682, 0, 0]
      , "details":
      [
        "Global interconnect for 0 global loads and 4 global stores. Reduce number of global loads and stores to simplify global interconnect."
      ]
    }
    , {
      "name":"Constant cache interconnect"
      , "data":
      [894, 9500, 44, 0]
      , "details":
      [
        "16384 bytes constant cache accessible to all kernels and is persistent across kernel invocations. Data inside the cache is replicated 2 times to support 4 reads. Cache optimized for hits, misses incur a large penalty. If amount of data in the cache is small, consider passing it by value as a kernel argument. Use Dynamic Profiler to check stalls on accesses to the cache to assess the cache's effectiveness. Profiling actual cache hit rate is currently not supported.\n"
      ]
    }
  ]
  , "functions":
  [
    {
      "name":"simple_linear_regression"
      , "compute_units":4
      , "details":
      [
        "Number of compute units: 4"
      ]
      , "resources":
      [
        {
          "name":"Function overhead"
          , "data":
          [3697, 3296, 0, 0]
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
              [5140, 10820, 16, 0]
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
                    [128, 128, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"simple_linear_regression_k_g_CU.cl:25"
                    , "data":
                    [248, 248, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_CU/device/simple_linear_regression_k_g_CU.cl"
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
                    "name":"simple_linear_regression_k_g_CU.cl:26"
                    , "data":
                    [738.667, 1593.33, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_CU/device/simple_linear_regression_k_g_CU.cl"
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
                    "name":"simple_linear_regression_k_g_CU.cl:27"
                    , "data":
                    [405.333, 764.667, 6, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_CU/device/simple_linear_regression_k_g_CU.cl"
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
                    "name":"simple_linear_regression_k_g_CU.cl:30"
                    , "data":
                    [3620, 8086, 10, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_CU/device/simple_linear_regression_k_g_CU.cl"
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
              [1000, 2136, 8, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"simple_linear_regression_k_g_CU.cl:25"
              , "data":
              [412, 272, 4, 0]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_CU/device/simple_linear_regression_k_g_CU.cl"
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
                    [284, 272, 4, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [128, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"simple_linear_regression_k_g_CU.cl:26"
              , "data":
              [9104, 12332, 12, 28]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_CU/device/simple_linear_regression_k_g_CU.cl"
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
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"And"
                    , "data":
                    [64, 0, 0, 0]
                  }
                  , "count":9
                }
                , {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [564, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Or"
                    , "data":
                    [56, 0, 0, 0]
                  }
                  , "count":8
                }
              ]
            }
            , {
              "name":"simple_linear_regression_k_g_CU.cl:27"
              , "data":
              [2440, 2180, 16, 40]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_CU/device/simple_linear_regression_k_g_CU.cl"
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
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [136, 192, 0, 4]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"simple_linear_regression_k_g_CU.cl:30"
              , "data":
              [5700, 5336, 56, 4]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_CU/device/simple_linear_regression_k_g_CU.cl"
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
                  , "count":4
                }
                , {
                  "info":
                  {
                    "name":"And"
                    , "data":
                    [64, 0, 0, 0]
                  }
                  , "count":8
                }
                , {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [2168, 0, 0, 0]
                  }
                  , "count":4
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [40, 164, 0, 4]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Or"
                    , "data":
                    [56, 0, 0, 0]
                  }
                  , "count":10
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [128, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [3236, 5172, 56, 0]
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
;var fileJSON=[{"index":0, "path":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_CU/device/simple_linear_regression_k_g_CU.cl", "name":"simple_linear_regression_k_g_CU.cl", "content":"//////////////////////////////////////////////////////////////////\012//Made by Samyuel Danyo on 06/11/2017\012/////////////////////////////////////////////////////////////////\012//This is OpenCL ACL kernel implementing a simple Linear Regression\012//neuron behavior. It is written for Intel FPGA, synthesized with\012//Intel SDK\012\012__attribute__((reqd_work_group_size(10000, 1, 1)))\012__attribute__((num_compute_units(4)))\012__kernel void simple_linear_regression(__constant float *restrict x,\012                       		__global float *restrict y)\012{\012	// Weights vector\012	__local float weights[4];\012	weights[0] = -0.55395846;\012	weights[1] = 1;\012	weights[2] = 10;\012        weights[3] = 8.94836441;\012	// Get index of the work item\012	int index = get_global_id(0);\012\012	// Creating the design vector\012	__local float features[4];\012	features[0] = 1;\012	features[1] = x[index];\012	features[2] = sin(3 * x[index]);\012        features[3] = exp(-1 * x[index] * x[index]);\012\012	// Executiong our inference\012	y[index] = features[0] * weights [0] + features[1] * weights [1] + features[2] * weights [2] + features[3] * weights [3];\012\012}\012\012"}];