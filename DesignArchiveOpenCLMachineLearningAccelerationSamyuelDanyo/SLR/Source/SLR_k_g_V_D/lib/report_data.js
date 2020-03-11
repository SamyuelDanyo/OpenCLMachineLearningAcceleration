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
              , "line":"21"
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
    "h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_V_D/device/simple_linear_regression_k_g_V_D.cl":"1"
  }
}
;var areaJSON={
  "columns":["ALUTs", "FFs", "RAMs", "DSPs"]
  , "debug_enabled":1
  , "total_percent":
  [39.7315, 22.0357, 19.2522, 20.2335, 64.2857]
  , "total":
  [24145, 42190, 104, 72]
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
        "Number of compute units: 1"
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
              [4400, 9313.01, 10, 0]
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
                    "name":"simple_linear_regression_k_g_V_D.cl:21"
                    , "data":
                    [332, 630, 1, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_V_D/device/simple_linear_regression_k_g_V_D.cl"
                          , "line":21
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"simple_linear_regression_k_g_V_D.cl:22"
                    , "data":
                    [272, 569, 1, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_V_D/device/simple_linear_regression_k_g_V_D.cl"
                          , "line":22
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"simple_linear_regression_k_g_V_D.cl:23"
                    , "data":
                    [225, 499, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_V_D/device/simple_linear_regression_k_g_V_D.cl"
                          , "line":23
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"simple_linear_regression_k_g_V_D.cl:24"
                    , "data":
                    [272, 569, 1, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_V_D/device/simple_linear_regression_k_g_V_D.cl"
                          , "line":24
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"simple_linear_regression_k_g_V_D.cl:27"
                    , "data":
                    [793, 1681, 1, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_V_D/device/simple_linear_regression_k_g_V_D.cl"
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
                    "name":"simple_linear_regression_k_g_V_D.cl:28"
                    , "data":
                    [809, 1713, 1, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_V_D/device/simple_linear_regression_k_g_V_D.cl"
                          , "line":28
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"simple_linear_regression_k_g_V_D.cl:29"
                    , "data":
                    [823, 1720, 2, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_V_D/device/simple_linear_regression_k_g_V_D.cl"
                          , "line":29
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"simple_linear_regression_k_g_V_D.cl:30"
                    , "data":
                    [842, 1900, 3, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_V_D/device/simple_linear_regression_k_g_V_D.cl"
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
              "name":"simple_linear_regression_k_g_V_D.cl:21"
              , "data":
              [2989, 3696, 8, 17]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_V_D/device/simple_linear_regression_k_g_V_D.cl"
                    , "line":21
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
                    [576, 497, 4, 9]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"'sinf' Function Call"
                    , "data":
                    [2105, 3083, 3, 7]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"And"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":10
                }
                , {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [34, 48, 0, 1]
                  }
                  , "count":1
                }
                , {
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
                    "name":"Or"
                    , "data":
                    [14, 0, 0, 0]
                  }
                  , "count":8
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [32, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"simple_linear_regression_k_g_V_D.cl:22"
              , "data":
              [2886, 3628, 7, 17]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_V_D/device/simple_linear_regression_k_g_V_D.cl"
                    , "line":22
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
                    [576, 497, 4, 9]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"'sinf' Function Call"
                    , "data":
                    [2105, 3083, 3, 7]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"And"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":10
                }
                , {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [34, 48, 0, 1]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Or"
                    , "data":
                    [14, 0, 0, 0]
                  }
                  , "count":8
                }
              ]
            }
            , {
              "name":"simple_linear_regression_k_g_V_D.cl:23"
              , "data":
              [2886, 3628, 7, 17]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_V_D/device/simple_linear_regression_k_g_V_D.cl"
                    , "line":23
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
                    [576, 497, 4, 9]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"'sinf' Function Call"
                    , "data":
                    [2105, 3083, 3, 7]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"And"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":10
                }
                , {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [34, 48, 0, 1]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Or"
                    , "data":
                    [14, 0, 0, 0]
                  }
                  , "count":8
                }
              ]
            }
            , {
              "name":"simple_linear_regression_k_g_V_D.cl:24"
              , "data":
              [2886, 3628, 7, 17]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_V_D/device/simple_linear_regression_k_g_V_D.cl"
                    , "line":24
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
                    [576, 497, 4, 9]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"'sinf' Function Call"
                    , "data":
                    [2105, 3083, 3, 7]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"And"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":10
                }
                , {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [34, 48, 0, 1]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Or"
                    , "data":
                    [14, 0, 0, 0]
                  }
                  , "count":8
                }
              ]
            }
            , {
              "name":"simple_linear_regression_k_g_V_D.cl:27"
              , "data":
              [616, 41, 0, 1]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_V_D/device/simple_linear_regression_k_g_V_D.cl"
                    , "line":27
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
                    [2, 0, 0, 0]
                  }
                  , "count":4
                }
                , {
                  "info":
                  {
                    "name":"And"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":8
                }
                , {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [542, 0, 0, 0]
                  }
                  , "count":4
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [10, 41, 0, 1]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Or"
                    , "data":
                    [14, 0, 0, 0]
                  }
                  , "count":10
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [32, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"simple_linear_regression_k_g_V_D.cl:28"
              , "data":
              [584, 41, 0, 1]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_V_D/device/simple_linear_regression_k_g_V_D.cl"
                    , "line":28
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
                    [2, 0, 0, 0]
                  }
                  , "count":4
                }
                , {
                  "info":
                  {
                    "name":"And"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":8
                }
                , {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [542, 0, 0, 0]
                  }
                  , "count":4
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [10, 41, 0, 1]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Or"
                    , "data":
                    [14, 0, 0, 0]
                  }
                  , "count":10
                }
              ]
            }
            , {
              "name":"simple_linear_regression_k_g_V_D.cl:29"
              , "data":
              [584, 41, 0, 1]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_V_D/device/simple_linear_regression_k_g_V_D.cl"
                    , "line":29
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
                    [2, 0, 0, 0]
                  }
                  , "count":4
                }
                , {
                  "info":
                  {
                    "name":"And"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":8
                }
                , {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [542, 0, 0, 0]
                  }
                  , "count":4
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [10, 41, 0, 1]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Or"
                    , "data":
                    [14, 0, 0, 0]
                  }
                  , "count":10
                }
              ]
            }
            , {
              "name":"simple_linear_regression_k_g_V_D.cl:30"
              , "data":
              [1129, 1130, 14, 1]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_V_D/device/simple_linear_regression_k_g_V_D.cl"
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
                    [2, 0, 0, 0]
                  }
                  , "count":4
                }
                , {
                  "info":
                  {
                    "name":"And"
                    , "data":
                    [16, 0, 0, 0]
                  }
                  , "count":8
                }
                , {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [542, 0, 0, 0]
                  }
                  , "count":4
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [10, 41, 0, 1]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Or"
                    , "data":
                    [14, 0, 0, 0]
                  }
                  , "count":10
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
;var fileJSON=[{"index":0, "path":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_k_g_V_D/device/simple_linear_regression_k_g_V_D.cl", "name":"simple_linear_regression_k_g_V_D.cl", "content":"//////////////////////////////////////////////////////////////////\012//Made by Samyuel Danyo on 06/11/2017\012/////////////////////////////////////////////////////////////////\012//This is OpenCL ACL kernel implementing a simple Linear Regression\012//neuron behavior. It is written for Intel FPGA, synthesized with\012//Intel SDK\012//Data parallelism trough vector data type.\012\012__attribute__((reqd_work_group_size(10000, 1, 1)))\012__kernel void simple_linear_regression(__constant float4 * restrict x,\012                       		__global float4 * restrict y)\012{\012	// Weights vector\012	__local float4  weights;\012	weights = (float4) (-0.55395846, 1, 10, 8.94836441);\012	// Get index of the work item\012	int index = get_global_id(0);\012\012	// Creating the design vector\012	__local float4 features[4];\012	features[0] = (float4) (1, x[index].s0, sin(3 * x[index].s0), exp(-1 * x[index].s0 * x[index].s0));\012	features[1] = (float4) (1, x[index].s1, sin(3 * x[index].s1), exp(-1 * x[index].s1 * x[index].s1));\012	features[2] = (float4) (1, x[index].s2, sin(3 * x[index].s2), exp(-1 * x[index].s2 * x[index].s2));\012    features[3] = (float4) (1, x[index].s3, sin(3 * x[index].s3), exp(-1 * x[index].s3 * x[index].s3));\012\012	// Executiong our inference\012	y[index].s0 = features[0].s0 * weights.s0 + features[0].s1 * weights.s1 + features[0].s2 * weights.s2 + features[0].s3 * weights.s3;\012	y[index].s1 = features[1].s0 * weights.s0 + features[1].s1 * weights.s1 + features[1].s2 * weights.s2 + features[1].s3 * weights.s3;\012	y[index].s2 = features[2].s0 * weights.s0 + features[2].s1 * weights.s1 + features[2].s2 * weights.s2 + features[2].s3 * weights.s3;\012	y[index].s3 = features[3].s0 * weights.s0 + features[3].s1 * weights.s1 + features[3].s2 * weights.s2 + features[3].s3 * weights.s3;\012\012}\012\012"}];