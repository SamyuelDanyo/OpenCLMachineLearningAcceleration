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
      , "id":13
      , "name":"simple_linear_regression_w"
      , "file":""
      , "line":"0"
      , "children":[
        {
          "type":"bb"
          , "id":3
          , "name":"Block0.wii_blk"
          , "file":""
          , "line":"0"
          , "children":[
            {
              "type":"inst"
              , "id":5
              , "name":"Load"
              , "file":"1"
              , "line":"23"
              , "details":
              {
                "Width":"128 bits"
                , "Type":"Simple"
                , "Stall-free":"No"
                , "Start-Cycle":"1"
                , "Latency":"1"
                , "Additional Info":" This operation is work-item invariant -- it performs the same operation for all threads in the kernel."
              }
            }
            , {
              "type":"inst"
              , "id":6
              , "name":"end"
              , "file":"0"
              , "line":"0"
              , "details":
              {
                "Start-Cycle":"3"
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
            "Latency":"4"
          }
        }
        , {
          "type":"bb"
          , "id":4
          , "name":"Block1"
          , "file":""
          , "line":"0"
          , "children":[
            {
              "type":"inst"
              , "id":8
              , "name":"Load"
              , "file":"1"
              , "line":"18"
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
              , "id":9
              , "name":"Store"
              , "file":"1"
              , "line":"23"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Streaming"
                , "Stall-free":"No"
                , "Start-Cycle":"77"
                , "Latency":"2"
              }
            }
            , {
              "type":"inst"
              , "id":10
              , "name":"end"
              , "file":"1"
              , "line":"25"
              , "details":
              {
                "Start-Cycle":"79"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":11
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
            "Latency":"80"
          }
        }
      ]
    }
    , {
      "type":"memtype"
      , "id":14
      , "name":"Global Memory"
      , "file":""
      , "line":"0"
      , "children":[
        {
          "type":"memsys"
          , "id":15
          , "name":""
          , "file":""
          , "line":"0"
          , "replFactor":"0"
          , "banks":1
          , "pumping":0
          , "children":[
            {
              "type":"bank"
              , "id":16
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
      "from":8
      , "to":9
    }
    ,
    {
      "from":11
      , "to":8
    }
    ,
    {
      "from":7
      , "to":5
    }
    ,
    {
      "from":5
      , "to":6
    }
    ,
    {
      "from":9
      , "to":10
    }
    ,
    {
      "from":6
      , "to":11
    }
    ,
    {
      "from":9
      , "to":16
    }
  ]
  , "fileIndexMap":
  {
    "h:/3 Year Project/OpenCL/Simple_Linear_Regression_w/device/simple_linear_regression_w.cl":"1"
  }
}
;var areaJSON={
  "columns":["ALUTs", "FFs", "RAMs", "DSPs"]
  , "debug_enabled":1
  , "total_percent":
  [20.7191, 9.77439, 11.3537, 14.9805, 17.8571]
  , "total":
  [10710, 24881, 77, 20]
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
        "16384 bytes constant cache accessible to all kernels and is persistent across kernel invocations. Data inside the cache is replicated 1 time to support 2 reads. Cache optimized for hits, misses incur a large penalty. If amount of data in the cache is small, consider passing it by value as a kernel argument. Use Dynamic Profiler to check stalls on accesses to the cache to assess the cache's effectiveness. Profiling actual cache hit rate is currently not supported.\n"
      ]
    }
  ]
  , "functions":
  [
    {
      "name":"simple_linear_regression_w"
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
          "name":"Block0.wii_blk"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [160, 160, 0, 0]
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
                    "name":"simple_linear_regression_w.cl:23"
                    , "data":
                    [128, 128, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_w/device/simple_linear_regression_w.cl"
                          , "line":23
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"simple_linear_regression_w.cl:23"
              , "data":
              [2, 130, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_w/device/simple_linear_regression_w.cl"
                    , "line":23
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
                    [2, 130, 0, 0]
                    , "details":
                    [
                      "Work-Item Invariant instruction."
                    ]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block1"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [1104, 2510, 4, 0]
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
                    [32, 192, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"simple_linear_regression_w.cl:18"
                    , "data":
                    [62, 62, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_w/device/simple_linear_regression_w.cl"
                          , "line":18
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"simple_linear_regression_w.cl:19"
                    , "data":
                    [184.667, 398.333, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_w/device/simple_linear_regression_w.cl"
                          , "line":19
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"simple_linear_regression_w.cl:20"
                    , "data":
                    [82, 160, 1, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_w/device/simple_linear_regression_w.cl"
                          , "line":20
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"simple_linear_regression_w.cl:23"
                    , "data":
                    [743.333, 1697.67, 3, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_w/device/simple_linear_regression_w.cl"
                          , "line":23
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
              [250, 534, 2, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"simple_linear_regression_w.cl:18"
              , "data":
              [103, 68, 1, 0]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_w/device/simple_linear_regression_w.cl"
                    , "line":18
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
                    [32, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"simple_linear_regression_w.cl:19"
              , "data":
              [2276, 3083, 3, 7]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_w/device/simple_linear_regression_w.cl"
                    , "line":19
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
                  , "count":9
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
                    "name":"Or"
                    , "data":
                    [14, 0, 0, 0]
                  }
                  , "count":8
                }
              ]
            }
            , {
              "name":"simple_linear_regression_w.cl:20"
              , "data":
              [610, 545, 4, 10]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_w/device/simple_linear_regression_w.cl"
                    , "line":20
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
                    "name":"Fmul"
                    , "data":
                    [34, 48, 0, 1]
                  }
                  , "count":1
                }
              ]
            }
            , {
              "name":"simple_linear_regression_w.cl:23"
              , "data":
              [1366, 1437, 14, 3]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_w/device/simple_linear_regression_w.cl"
                    , "line":23
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Fadd"
                    , "data":
                    [423, 0, 0, 0]
                  }
                  , "count":3
                }
                , {
                  "info":
                  {
                    "name":"Fmul"
                    , "data":
                    [102, 144, 0, 3]
                  }
                  , "count":3
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
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [809, 1293, 14, 0]
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
;var fileJSON=[{"index":0, "path":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_w/device/simple_linear_regression_w.cl", "name":"simple_linear_regression_w.cl", "content":"//////////////////////////////////////////////////////////////////\012//Made by Samyuel Danyo on 06/11/2017\012/////////////////////////////////////////////////////////////////\012//This is OpenCL ACL kernel implementing a simple Linear Regression\012//neuron behavior. It is written for Intel FPGA, synthesized with\012//Intel SDK\012\012__kernel void simple_linear_regression_w(__constant float *restrict x, \012                             __constant float *restrict weights,\012                       		__global float *restrict y)\012{\012	// Get index of the work item\012	int index = get_global_id(0);\012\012	// Creating the design vector\012	__local float features[4];\012	features[0] = 1;\012	features[1] = x[index];\012	features[2] = sin(3 * x[index]);\012        features[3] = exp(-1 * x[index] * x[index]);\012\012	// Executiong our inference\012	y[index] = features[0] * weights [0] + features[1] * weights [1] + features[2] * weights [2] + features[3] * weights [3];\012\012}\012\012"}];