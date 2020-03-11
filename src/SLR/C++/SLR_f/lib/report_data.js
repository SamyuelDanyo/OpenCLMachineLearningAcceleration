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
      , "name":"simple_linear_regression_f"
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
              , "line":"16"
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
              , "line":"16"
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
              , "id":9
              , "name":"Store"
              , "file":"1"
              , "line":"16"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Streaming"
                , "Stall-free":"No"
                , "Start-Cycle":"41"
                , "Latency":"2"
              }
            }
            , {
              "type":"inst"
              , "id":10
              , "name":"end"
              , "file":"1"
              , "line":"18"
              , "details":
              {
                "Start-Cycle":"43"
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
            "Latency":"44"
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
      "from":7
      , "to":5
    }
    ,
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
    "h:/3 Year Project/OpenCL/Simple_Linear_Regression_f/device/simple_linear_regression_f.cl":"1"
  }
}
;var areaJSON={
  "columns":["ALUTs", "FFs", "RAMs", "DSPs"]
  , "debug_enabled":1
  , "total_percent":
  [16.3763, 7.0173, 9.51612, 13.2296, 3.57143]
  , "total":
  [7689, 20854, 68, 4]
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
      "name":"simple_linear_regression_f"
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
                    "name":"simple_linear_regression_f.cl:16"
                    , "data":
                    [128, 128, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_f/device/simple_linear_regression_f.cl"
                          , "line":16
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
              "name":"simple_linear_regression_f.cl:16"
              , "data":
              [2, 130, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_f/device/simple_linear_regression_f.cl"
                    , "line":16
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
              [840, 1967, 2, 0]
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
                    "name":"simple_linear_regression_f.cl:16"
                    , "data":
                    [808, 1775, 2, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_f/device/simple_linear_regression_f.cl"
                          , "line":16
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
              "name":"simple_linear_regression_f.cl:16"
              , "data":
              [1502, 1553, 15, 4]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_f/device/simple_linear_regression_f.cl"
                    , "line":16
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
                    [136, 192, 0, 4]
                  }
                  , "count":4
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
                    "name":"Pointer Computation"
                    , "data":
                    [63, 0, 0, 0]
                  }
                  , "count":2
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
;var fileJSON=[{"index":0, "path":"h:/3 Year Project/OpenCL/Simple_Linear_Regression_f/device/simple_linear_regression_f.cl", "name":"simple_linear_regression_f.cl", "content":"/////////////////////////////////////////////////////////////////\012//Made by Samyuel Danyo on 06/11/2017\012/////////////////////////////////////////////////////////////////\012//This is OpenCL ACL kernel implementing a simple Linear Regression\012//neuron behavior. It is written for Intel FPGA, synthesized with\012//Intel SDK\012\012__kernel void simple_linear_regression_f(__constant float *restrict weights,\012			      __constant float *restrict features,\012                       	             __global float *restrict y)\012{\012	// Get index of the work item\012	int index = get_global_id(0);\012\012	// Executiong our inference\012	y[index] = features[4 * index] * weights[0] + features[4 * index + 1] * weights[1] + features[4 * index + 2] * weights[2] + features[4 * index + 3] * weights [3];\012\012}\012\012"}];