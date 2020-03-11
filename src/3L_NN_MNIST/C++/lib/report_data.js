var loopsJSON={
  "columns":["Pipelined", "II", "Bottleneck"]
  , "functions":
  [
    {
      "name":"Block1"
      , "data":
      ["Yes", "32758", "n/a"]
      , "debug":
      [
        [
          {
            "filename":"three_layer_nn_host.cl"
            , "line":57
            , "level":0
          }
        ]
      ]
    }
    , {
      "name":"Block2"
      , "data":
      ["Yes", "32758", "n/a"]
      , "debug":
      [
        [
          {
            "filename":"three_layer_nn_host.cl"
            , "line":61
            , "level":1
          }
        ]
      ]
    }
    , {
      "name":"Block6"
      , "data":
      ["Yes", "1", "n/a"]
      , "debug":
      [
        [
          {
            "filename":"three_layer_nn_host.cl"
            , "line":83
            , "level":0
          }
        ]
      ]
    }
    , {
      "name":"Block7"
      , "data":
      ["Yes", "1", "n/a"]
      , "debug":
      [
        [
          {
            "filename":"three_layer_nn_host.cl"
            , "line":89
            , "level":0
          }
        ]
      ]
    }
    , {
      "name":"Block8"
      , "data":
      ["Yes", "6", "II"]
      , "debug":
      [
        [
          {
            "filename":"three_layer_nn_host.cl"
            , "line":93
            , "level":1
          }
        ]
      ]
      , "details":
      [
        "Data dependency"
      ]
      , "resources":
      [
        {
          "name":"II bottleneck due to data dependency on variable(s):"
          , "subinfos":
          [
          ]
        }
        , {
          "name":"Largest critical path contributor(s):"
          , "subinfos":
          [
            {
              "info":
              {
                "name":"96%: Fadd Operation"
                , "debug":
                [
                  [
                    {
                      "filename":"three_layer_nn_host.cl"
                      , "line":95
                    }
                  ]
                ]
              }
            }
          ]
        }
      ]
    }
    , {
      "name":"Block12"
      , "data":
      ["Yes", "32758", "n/a"]
      , "debug":
      [
        [
          {
            "filename":"three_layer_nn_host.cl"
            , "line":117
            , "level":0
          }
        ]
      ]
    }
    , {
      "name":"Block14"
      , "data":
      ["Yes", "32758", "n/a"]
      , "debug":
      [
        [
          {
            "filename":"three_layer_nn_host.cl"
            , "line":123
            , "level":0
          }
        ]
      ]
    }
    , {
      "name":"Block15"
      , "data":
      ["Yes", "32758", "n/a"]
      , "debug":
      [
        [
          {
            "filename":"three_layer_nn_host.cl"
            , "line":127
            , "level":1
          }
        ]
      ]
    }
  ]
}
;var mavJSON={
  "nodes":
  [
    {
      "type":"kernel"
      , "id":18
      , "name":"HL_1_RELU"
      , "file":""
      , "line":"0"
      , "children":[
        {
          "type":"bb"
          , "id":3
          , "name":"Block0"
          , "file":""
          , "line":"0"
          , "details":
          {
            "Latency":"2"
          }
        }
        , {
          "type":"bb"
          , "id":4
          , "name":"Block1"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Entry to loop. "
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"Yes"
          , "isPipelined":"No"
          , "loopTo":15
          , "details":
          {
            "Latency":"154"
          }
        }
        , {
          "type":"bb"
          , "id":5
          , "name":"Block2"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Loop is not pipelined. See Optimization Report for more information."
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"No"
          , "isPipelined":"No"
          , "children":[
            {
              "type":"inst"
              , "id":8
              , "name":"Load"
              , "file":"1"
              , "line":"63"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"2"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":9
              , "name":"Load"
              , "file":"1"
              , "line":"63"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"2"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":10
              , "name":"loop end"
              , "file":"1"
              , "line":"61"
              , "details":
              {
                "Start-Cycle":"179"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":11
              , "name":"loop"
              , "file":""
              , "line":""
              , "loopTo":10
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
            "Latency":"180"
          }
        }
        , {
          "type":"bb"
          , "id":6
          , "name":"Block3"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Exit which branches back to loop. "
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"Yes"
          , "isPipelined":"No"
          , "children":[
            {
              "type":"inst"
              , "id":12
              , "name":"Load"
              , "file":"1"
              , "line":"65"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"1"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":13
              , "name":"Channel Write"
              , "file":"1"
              , "line":"67"
              , "details":
              {
                "Width":"32 bits"
                , "Depth":"0"
                , "Stall-free":"No"
                , "Start-Cycle":"176"
                , "Latency":"1"
              }
            }
            , {
              "type":"inst"
              , "id":15
              , "name":"end"
              , "file":"1"
              , "line":"57"
              , "details":
              {
                "Start-Cycle":"177"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":16
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
            "Latency":"178"
          }
        }
        , {
          "type":"bb"
          , "id":7
          , "name":"Block4"
          , "file":""
          , "line":"0"
          , "details":
          {
            "Latency":"2"
          }
        }
      ]
    }
    , {
      "type":"kernel"
      , "id":43
      , "name":"HL_2_SIG"
      , "file":""
      , "line":"0"
      , "children":[
        {
          "type":"bb"
          , "id":23
          , "name":"Block5"
          , "file":""
          , "line":"0"
          , "details":
          {
            "Latency":"2"
          }
        }
        , {
          "type":"bb"
          , "id":24
          , "name":"Block6"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":""
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"No"
          , "isPipelined":"Yes"
          , "children":[
            {
              "type":"inst"
              , "id":29
              , "name":"Channel Read"
              , "file":"1"
              , "line":"85"
              , "details":
              {
                "Width":"32 bits"
                , "Depth":"0"
                , "Stall-free":"No"
                , "Start-Cycle":"10"
                , "Latency":"1"
              }
            }
            , {
              "type":"inst"
              , "id":30
              , "name":"Store"
              , "file":"1"
              , "line":"85"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Pipelined"
                , "Stall-free":"Yes"
                , "Start-Cycle":"11"
                , "Latency":"2"
              }
            }
            , {
              "type":"inst"
              , "id":31
              , "name":"loop end"
              , "file":"1"
              , "line":"83"
              , "details":
              {
                "Start-Cycle":"13"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":32
              , "name":"loop"
              , "file":""
              , "line":""
              , "loopTo":31
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
            "Latency":"14"
          }
        }
        , {
          "type":"bb"
          , "id":25
          , "name":"Block7"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Entry to loop. "
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"Yes"
          , "isPipelined":"Yes"
          , "loopTo":40
          , "details":
          {
            "Latency":"11"
          }
        }
        , {
          "type":"bb"
          , "id":26
          , "name":"Block8"
          , "file":""
          , "line":"0"
          , "II":6
          , "LoopInfo":"Loop is pipelined with II of 6. See Optimization Report for more information."
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"No"
          , "isPipelined":"Yes"
          , "children":[
            {
              "type":"inst"
              , "id":33
              , "name":"Load"
              , "file":"1"
              , "line":"95"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"12"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":34
              , "name":"Load"
              , "file":"1"
              , "line":"95"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Pipelined"
                , "Stall-free":"Yes"
                , "Start-Cycle":"174"
                , "Latency":"4"
                , "Additional Info":" Part of a stall-free cluster."
              }
            }
            , {
              "type":"inst"
              , "id":35
              , "name":"loop end"
              , "file":"1"
              , "line":"93"
              , "details":
              {
                "Start-Cycle":"194"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":36
              , "name":"loop"
              , "file":""
              , "line":""
              , "loopTo":35
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
            "Latency":"195"
          }
        }
        , {
          "type":"bb"
          , "id":27
          , "name":"Block9"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Exit which branches back to loop. "
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"Yes"
          , "isPipelined":"Yes"
          , "children":[
            {
              "type":"inst"
              , "id":37
              , "name":"Load"
              , "file":"1"
              , "line":"97"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Prefetching"
                , "Stall-free":"No"
                , "Start-Cycle":"1"
                , "Latency":"3"
              }
            }
            , {
              "type":"inst"
              , "id":38
              , "name":"Channel Write"
              , "file":"1"
              , "line":"99"
              , "details":
              {
                "Width":"32 bits"
                , "Depth":"0"
                , "Stall-free":"No"
                , "Start-Cycle":"52"
                , "Latency":"1"
              }
            }
            , {
              "type":"inst"
              , "id":40
              , "name":"end"
              , "file":"1"
              , "line":"89"
              , "details":
              {
                "Start-Cycle":"53"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":41
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
            "Latency":"54"
          }
        }
        , {
          "type":"bb"
          , "id":28
          , "name":"Block10"
          , "file":""
          , "line":"0"
          , "details":
          {
            "Latency":"2"
          }
        }
        , {
          "type":"memtype"
          , "id":44
          , "name":"Local Memory"
          , "file":""
          , "line":"0"
          , "children":[
            {
              "type":"memsys"
              , "id":45
              , "name":"features"
              , "file":""
              , "line":"0"
              , "replFactor":"1"
              , "banks":1
              , "pumping":1
              , "children":[
                {
                  "type":"bank"
                  , "id":46
                  , "name":"Bank 0"
                  , "file":""
                  , "line":"0"
                }
              ]
            }
          ]
        }
      ]
    }
    , {
      "type":"kernel"
      , "id":68
      , "name":"OL_SOFTMAX"
      , "file":""
      , "line":"0"
      , "children":[
        {
          "type":"bb"
          , "id":48
          , "name":"Block11"
          , "file":""
          , "line":"0"
          , "details":
          {
            "Latency":"4"
          }
        }
        , {
          "type":"bb"
          , "id":49
          , "name":"Block12"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Loop is not pipelined. See Optimization Report for more information."
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"No"
          , "isPipelined":"No"
          , "children":[
            {
              "type":"inst"
              , "id":55
              , "name":"Channel Read"
              , "file":"1"
              , "line":"119"
              , "details":
              {
                "Width":"32 bits"
                , "Depth":"0"
                , "Stall-free":"No"
                , "Start-Cycle":"252"
                , "Latency":"1"
              }
            }
            , {
              "type":"inst"
              , "id":56
              , "name":"Store"
              , "file":"1"
              , "line":"119"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Pipelined"
                , "Stall-free":"Yes"
                , "Start-Cycle":"253"
                , "Latency":"2"
              }
            }
            , {
              "type":"inst"
              , "id":57
              , "name":"loop end"
              , "file":"1"
              , "line":"117"
              , "details":
              {
                "Start-Cycle":"255"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":58
              , "name":"loop"
              , "file":""
              , "line":""
              , "loopTo":57
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
            "Latency":"256"
          }
        }
        , {
          "type":"bb"
          , "id":50
          , "name":"Block13"
          , "file":""
          , "line":"0"
          , "details":
          {
            "Latency":"2"
          }
        }
        , {
          "type":"bb"
          , "id":51
          , "name":"Block14"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Entry to loop. "
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"Yes"
          , "isPipelined":"No"
          , "loopTo":65
          , "details":
          {
            "Latency":"5"
          }
        }
        , {
          "type":"bb"
          , "id":52
          , "name":"Block15"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Loop is not pipelined. See Optimization Report for more information."
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"No"
          , "isPipelined":"No"
          , "children":[
            {
              "type":"inst"
              , "id":59
              , "name":"Load"
              , "file":"1"
              , "line":"129"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"2"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":60
              , "name":"Load"
              , "file":"1"
              , "line":"129"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Pipelined"
                , "Stall-free":"Yes"
                , "Start-Cycle":"164"
                , "Latency":"4"
                , "Additional Info":" Part of a stall-free cluster."
              }
            }
            , {
              "type":"inst"
              , "id":61
              , "name":"loop end"
              , "file":"1"
              , "line":"127"
              , "details":
              {
                "Start-Cycle":"184"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":62
              , "name":"loop"
              , "file":""
              , "line":""
              , "loopTo":61
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
            "Latency":"185"
          }
        }
        , {
          "type":"bb"
          , "id":53
          , "name":"Block16"
          , "file":""
          , "line":"0"
          , "II":1
          , "LoopInfo":"Exit which branches back to loop. "
          , "hasFmaxBottlenecks":"No"
          , "hasSubloops":"Yes"
          , "isPipelined":"No"
          , "children":[
            {
              "type":"inst"
              , "id":63
              , "name":"Load"
              , "file":"1"
              , "line":"131"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"1"
                , "Latency":"160"
              }
            }
            , {
              "type":"inst"
              , "id":64
              , "name":"Store"
              , "file":"1"
              , "line":"132"
              , "details":
              {
                "Width":"32 bits"
                , "Type":"Burst-coalesced"
                , "Stall-free":"No"
                , "Start-Cycle":"173"
                , "Latency":"4"
              }
            }
            , {
              "type":"inst"
              , "id":65
              , "name":"end"
              , "file":"1"
              , "line":"123"
              , "details":
              {
                "Start-Cycle":"177"
                , "Latency":"1"
                , "Additional Info":"Exit from a basic block. Control flow branches at this node to one or more merge nodes. There is no control branching between merge and branch node for the same basic block."
              }
            }
            , {
              "type":"inst"
              , "id":66
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
            "Latency":"178"
          }
        }
        , {
          "type":"bb"
          , "id":54
          , "name":"Block17"
          , "file":""
          , "line":"0"
          , "details":
          {
            "Latency":"2"
          }
        }
        , {
          "type":"memtype"
          , "id":69
          , "name":"Local Memory"
          , "file":""
          , "line":"0"
          , "children":[
            {
              "type":"memsys"
              , "id":70
              , "name":"features"
              , "file":""
              , "line":"0"
              , "replFactor":"1"
              , "banks":1
              , "pumping":1
              , "children":[
                {
                  "type":"bank"
                  , "id":71
                  , "name":"Bank 0"
                  , "file":""
                  , "line":"0"
                }
              ]
            }
          ]
        }
      ]
    }
    , {
      "type":"memtype"
      , "id":19
      , "name":"Global Memory"
      , "file":""
      , "line":"0"
      , "children":[
        {
          "type":"memsys"
          , "id":20
          , "name":""
          , "file":""
          , "line":"0"
          , "replFactor":"0"
          , "banks":1
          , "pumping":0
          , "children":[
            {
              "type":"bank"
              , "id":21
              , "name":"Bank 0"
              , "file":""
              , "line":"0"
            }
          ]
        }
      ]
    }
    , {
      "type":"channel"
      , "id":14
      , "name":"OUT_HL_1"
      , "file":""
      , "line":"0"
      , "details":
      {
        "Width":"32 bits"
        , "Depth":"0"
      }
    }
    , {
      "type":"channel"
      , "id":39
      , "name":"OUT_HL_2"
      , "file":""
      , "line":"0"
      , "details":
      {
        "Width":"32 bits"
        , "Depth":"0"
      }
    }
  ]
  ,
  "links":
  [
    {
      "from":13
      , "to":14
    }
    ,
    {
      "from":16
      , "to":12
    }
    ,
    {
      "from":11
      , "to":9
    }
    ,
    {
      "from":11
      , "to":8
    }
    ,
    {
      "from":12
      , "to":13
    }
    ,
    {
      "from":10
      , "to":11
    }
    ,
    {
      "from":4
      , "to":11
    }
    ,
    {
      "from":13
      , "to":15
    }
    ,
    {
      "from":15
      , "to":4
    }
    ,
    {
      "from":3
      , "to":4
    }
    ,
    {
      "from":8
      , "to":10
    }
    ,
    {
      "from":9
      , "to":10
    }
    ,
    {
      "from":15
      , "to":7
    }
    ,
    {
      "from":10
      , "to":16
    }
    ,
    {
      "from":21
      , "to":12
    }
    ,
    {
      "from":21
      , "to":9
    }
    ,
    {
      "from":21
      , "to":8
    }
    ,
    {
      "from":14
      , "to":29
    }
    ,
    {
      "from":38
      , "to":39
    }
    ,
    {
      "from":46
      , "to":34
    }
    ,
    {
      "from":30
      , "to":46
    }
    ,
    {
      "from":29
      , "to":30
    }
    ,
    {
      "from":36
      , "to":33
    }
    ,
    {
      "from":37
      , "to":38
    }
    ,
    {
      "from":33
      , "to":34
    }
    ,
    {
      "from":32
      , "to":29
    }
    ,
    {
      "from":41
      , "to":37
    }
    ,
    {
      "from":40
      , "to":28
    }
    ,
    {
      "from":35
      , "to":41
    }
    ,
    {
      "from":31
      , "to":32
    }
    ,
    {
      "from":23
      , "to":32
    }
    ,
    {
      "from":30
      , "to":31
    }
    ,
    {
      "from":35
      , "to":36
    }
    ,
    {
      "from":25
      , "to":36
    }
    ,
    {
      "from":33
      , "to":35
    }
    ,
    {
      "from":34
      , "to":35
    }
    ,
    {
      "from":40
      , "to":25
    }
    ,
    {
      "from":31
      , "to":25
    }
    ,
    {
      "from":38
      , "to":40
    }
    ,
    {
      "from":21
      , "to":33
    }
    ,
    {
      "from":21
      , "to":37
    }
    ,
    {
      "from":39
      , "to":55
    }
    ,
    {
      "from":71
      , "to":60
    }
    ,
    {
      "from":56
      , "to":71
    }
    ,
    {
      "from":62
      , "to":59
    }
    ,
    {
      "from":63
      , "to":64
    }
    ,
    {
      "from":55
      , "to":56
    }
    ,
    {
      "from":66
      , "to":63
    }
    ,
    {
      "from":59
      , "to":60
    }
    ,
    {
      "from":58
      , "to":55
    }
    ,
    {
      "from":64
      , "to":65
    }
    ,
    {
      "from":65
      , "to":54
    }
    ,
    {
      "from":56
      , "to":57
    }
    ,
    {
      "from":61
      , "to":62
    }
    ,
    {
      "from":51
      , "to":62
    }
    ,
    {
      "from":65
      , "to":51
    }
    ,
    {
      "from":50
      , "to":51
    }
    ,
    {
      "from":57
      , "to":58
    }
    ,
    {
      "from":48
      , "to":58
    }
    ,
    {
      "from":57
      , "to":50
    }
    ,
    {
      "from":59
      , "to":61
    }
    ,
    {
      "from":60
      , "to":61
    }
    ,
    {
      "from":61
      , "to":66
    }
    ,
    {
      "from":21
      , "to":59
    }
    ,
    {
      "from":64
      , "to":21
    }
    ,
    {
      "from":21
      , "to":63
    }
  ]
  , "fileIndexMap":
  {
    "h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl":"1"
  }
}
;var areaJSON={
  "columns":["ALUTs", "FFs", "RAMs", "DSPs"]
  , "debug_enabled":1
  , "total_percent":
  [50.6803, 28.4845, 24.2694, 37.1595, 16.9643]
  , "total":
  [31211, 53185, 191, 19]
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
      [11636, 12730, 0, 0]
      , "details":
      [
        "Global interconnect for 7 global loads and 1 global store. Reduce number of global loads and stores to simplify global interconnect."
      ]
    }
    , {
      "name":"three_layer_nn_host.cl:27 (OUT_HL_1)"
      , "data":
      [32, 32, 0, 0]
      , "debug":
      [
        [
          {
            "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
            , "line":27
          }
        ]
      ]
      , "details":
      [
        "Channel is implemented 32 bits wide by 0 deep."
      ]
    }
    , {
      "name":"three_layer_nn_host.cl:28 (OUT_HL_2)"
      , "data":
      [32, 32, 0, 0]
      , "debug":
      [
        [
          {
            "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
            , "line":28
          }
        ]
      ]
      , "details":
      [
        "Channel is implemented 32 bits wide by 0 deep."
      ]
    }
  ]
  , "functions":
  [
    {
      "name":"HL_1_RELU"
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
              [32, 32, 0, 0]
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
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"three_layer_nn_host.cl:63"
              , "data":
              [23, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                    , "line":63
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
                    [23, 0, 0, 0]
                  }
                  , "count":2
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
              [70, 203, 0, 0]
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
                    [70, 133, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:57"
                    , "data":
                    [0, 35, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":57
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:61"
                    , "data":
                    [0, 17.5, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":61
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:63"
                    , "data":
                    [0, 17.5, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":63
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
              "name":"three_layer_nn_host.cl:57"
              , "data":
              [15.3333, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                    , "line":57
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
                    [15.3333, 0, 0, 0]
                  }
                  , "count":4
                }
              ]
            }
            , {
              "name":"three_layer_nn_host.cl:63"
              , "data":
              [7.66667, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                    , "line":63
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
                    [7.66667, 0, 0, 0]
                  }
                  , "count":2
                }
              ]
            }
          ]
        }
        , {
          "name":"Block2"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [531, 1454.5, 2, 0]
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
                    [173, 357.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:61"
                    , "data":
                    [90, 354, 2, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":61
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:63"
                    , "data":
                    [268, 743, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":63
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
              [330, 669, 3, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"three_layer_nn_host.cl:63"
              , "data":
              [1173, 4018, 26, 1]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                    , "line":63
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
                    [28, 0, 0, 0]
                  }
                  , "count":2
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
                    [906, 3970, 26, 0]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [64, 0, 0, 0]
                  }
                  , "count":2
                }
              ]
            }
          ]
        }
        , {
          "name":"Block3"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [350, 797.5, 1, 0]
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
                    [102, 188.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:57"
                    , "data":
                    [42, 173, 1, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":57
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:65"
                    , "data":
                    [158, 340, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":65
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:66"
                    , "data":
                    [48, 96, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":66
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
              [298, 637, 3, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"three_layer_nn_host.cl:65"
              , "data":
              [626, 1985, 13, 0]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                    , "line":65
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
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [453, 1985, 13, 0]
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
              "name":"three_layer_nn_host.cl:66"
              , "data":
              [63, 28, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                    , "line":66
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Floating Point Compare"
                    , "data":
                    [63, 28, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block4"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [0, 35, 0, 0]
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
                    [0, 35, 0, 0]
                  }
                  , "count":0
                }
              ]
            }
          ]
          , "computation":
          [
          ]
        }
      ]
    }
    , {
      "name":"HL_2_SIG"
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
        , {
          "name":"Private Variable: \n - 'f' (three_layer_nn_host.cl:83)"
          , "data":
          [8, 69, 0, 0]
          , "debug":
          [
            [
              {
                "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                , "line":83
              }
            ]
          ]
          , "details":
          [
            "Implemented using registers of the following size:\n- 1 register of width 32 and depth 1"
          ]
        }
        , {
          "name":"Private Variable: \n - 'f' (three_layer_nn_host.cl:93)"
          , "data":
          [10.4, 228, 0, 0]
          , "debug":
          [
            [
              {
                "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                , "line":93
              }
            ]
          ]
          , "details":
          [
            "Implemented using registers of the following size:\n- 1 register of width 32 and depth 6 (depth was increased by a factor of 6 due to a loop initiation interval of 6.)\nReducing the scope of the variable may reduce its depth (e.g. moving declaration inside a loop or using it as soon as possible)."
          ]
        }
        , {
          "name":"Private Variable: \n - 'n' (three_layer_nn_host.cl:89)"
          , "data":
          [8, 69, 0, 0]
          , "debug":
          [
            [
              {
                "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                , "line":89
              }
            ]
          ]
          , "details":
          [
            "Implemented using registers of the following size:\n- 1 register of width 32 and depth 1"
          ]
        }
        , {
          "name":"three_layer_nn_host.cl:80 (features)"
          , "data":
          [0, 0, 2, 0]
          , "debug":
          [
            [
              {
                "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                , "line":80
              }
            ]
          ]
          , "details":
          [
            "Local memory: Optimal.\nRequested size 2048 bytes (rounded up to nearest power of 2), implemented size 2048 bytes, stall-free, 1 read and 1 write. Additional information:\n- No additional details."
          ]
        }
      ]
      , "basicblocks":
      [
        {
          "name":"Block6"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [63, 68, 0, 0]
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
                    [1, 1, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [0, 2.83333, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:83"
                    , "data":
                    [11, 14.1667, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":83
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:85"
                    , "data":
                    [51, 50, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":85
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Feedback"
              , "data":
              [34, 80, 0, 0]
              , "details":
              [
                "Resources for loop-carried dependencies. To reduce this area:\n- reduce number and size of loop-carried variables"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:83"
                    , "data":
                    [34, 80, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":83
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
              [218, 502, 2, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"three_layer_nn_host.cl:85"
              , "data":
              [34, 24, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                    , "line":85
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [34, 24, 0, 0]
                    , "details":
                    [
                      "Stall-free write to memory declared on three_layer_nn_host.cl:80."
                    ]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block7"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [1, 10, 0, 0]
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
                    [1, 1, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [0, 4.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:89"
                    , "data":
                    [0, 4.5, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":89
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Feedback"
              , "data":
              [15, 29, 0, 0]
              , "details":
              [
                "Resources for loop-carried dependencies. To reduce this area:\n- reduce number and size of loop-carried variables"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:89"
                    , "data":
                    [15, 29, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":89
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
              [218, 502, 2, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
          ]
        }
        , {
          "name":"Block8"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [523, 2116, 15, 0]
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
                    [34, 227, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [135.25, 834, 8.75, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:89"
                    , "data":
                    [16, 36.6667, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":89
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:93"
                    , "data":
                    [57.75, 435.333, 5.25, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":93
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:95"
                    , "data":
                    [280, 583, 1, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":95
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
              ]
            }
            , {
              "name":"Feedback"
              , "data":
              [56.6, 670, 0, 0]
              , "details":
              [
                "Resources for loop-carried dependencies. To reduce this area:\n- reduce number and size of loop-carried variables"
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:89"
                    , "data":
                    [2.6, 57, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":89
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:93"
                    , "data":
                    [25, 352, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":93
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:95"
                    , "data":
                    [29, 261, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":95
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
              [501, 1062, 5, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"three_layer_nn_host.cl:95"
              , "data":
              [684, 2071, 13, 2]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                    , "line":95
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
                    [15, 0, 0, 0]
                  }
                  , "count":1
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
                    [462, 1993, 13, 0]
                    , "details":
                    [
                      "Stall-free read from memory declared on three_layer_nn_host.cl:80."
                    ]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Mul"
                    , "data":
                    [0, 30, 0, 1]
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
                  , "count":2
                }
              ]
            }
          ]
        }
        , {
          "name":"Block9"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [653, 1155, 1, 0]
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
                    [320, 480, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:89"
                    , "data":
                    [33, 26, 1, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":89
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:97"
                    , "data":
                    [158, 340, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":97
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:98"
                    , "data":
                    [142, 309, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":98
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
              [261, 699, 2, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"three_layer_nn_host.cl:97"
              , "data":
              [474, 298, 13, 0]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                    , "line":97
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
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [301, 298, 13, 0]
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
              "name":"three_layer_nn_host.cl:98"
              , "data":
              [880, 906, 9, 14]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                    , "line":98
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
                    "name":"Fadd"
                    , "data":
                    [119, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Floating Point Divide"
                    , "data":
                    [185, 409, 5, 5]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
      ]
    }
    , {
      "name":"OL_SOFTMAX"
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
          [1733, 2029, 0, 0]
          , "details":
          [
            "Kernel dispatch logic."
          ]
        }
        , {
          "name":"three_layer_nn_host.cl:114 (features)"
          , "data":
          [0, 0, 1, 0]
          , "debug":
          [
            [
              {
                "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                , "line":114
              }
            ]
          ]
          , "details":
          [
            "Local memory: Optimal.\nRequested size 1024 bytes (rounded up to nearest power of 2), implemented size 1024 bytes, stall-free, 1 read and 1 write. Additional information:\n- No additional details."
          ]
        }
      ]
      , "basicblocks":
      [
        {
          "name":"Block11"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [74, 197, 0, 0]
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
                    [64, 64, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:117"
                    , "data":
                    [10, 133, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":117
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
          ]
        }
        , {
          "name":"Block12"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [399, 1008.5, 4, 0]
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
                    [127, 287.5, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"No Source Line"
                    , "data":
                    [23, 51, 0.5, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:117"
                    , "data":
                    [132.5, 516.5, 2, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":117
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:119"
                    , "data":
                    [116.5, 153.5, 1.5, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":119
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
              "name":"three_layer_nn_host.cl:119"
              , "data":
              [34, 24, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                    , "line":119
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [34, 24, 0, 0]
                    , "details":
                    [
                      "Stall-free write to memory declared on three_layer_nn_host.cl:114."
                    ]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block13"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [86, 160.5, 0, 0]
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
                    [86, 160.5, 0, 0]
                  }
                  , "count":0
                }
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"three_layer_nn_host.cl:132"
              , "data":
              [14, 0, 0, 0]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                    , "line":132
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
                    [14, 0, 0, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block14"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [147, 550, 0, 0]
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
                    [122, 268, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:127"
                    , "data":
                    [25, 282, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":127
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
              "name":"three_layer_nn_host.cl:129"
              , "data":
              [0, 31, 0, 1]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                    , "line":129
                  }
                ]
              ]
              , "subinfos":
              [
                {
                  "info":
                  {
                    "name":"Mul"
                    , "data":
                    [0, 31, 0, 1]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block15"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [686.5, 1792.5, 2, 0]
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
                    [226, 492, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:127"
                    , "data":
                    [113.5, 500.5, 2, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":127
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:129"
                    , "data":
                    [347, 800, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":129
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
              [344.5, 728.5, 4, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"three_layer_nn_host.cl:129"
              , "data":
              [684, 2041, 13, 1]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                    , "line":129
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
                    [15, 0, 0, 0]
                  }
                  , "count":1
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
                    [462, 1993, 13, 0]
                    , "details":
                    [
                      "Stall-free read from memory declared on three_layer_nn_host.cl:114."
                    ]
                  }
                  , "count":2
                }
                , {
                  "info":
                  {
                    "name":"Pointer Computation"
                    , "data":
                    [32, 0, 0, 0]
                  }
                  , "count":2
                }
              ]
            }
          ]
        }
        , {
          "name":"Block16"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [479, 1291, 3, 0]
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
                    [154, 267, 0, 0]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:123"
                    , "data":
                    [111.5, 482.5, 2, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":123
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:131"
                    , "data":
                    [158, 340, 0, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":131
                        }
                      ]
                    ]
                  }
                  , "count":0
                }
                , {
                  "info":
                  {
                    "name":"three_layer_nn_host.cl:132"
                    , "data":
                    [55.5, 201.5, 1, 0]
                    , "debug":
                    [
                      [
                        {
                          "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                          , "line":132
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
              [298, 637, 3, 0]
              , "details":
              [
                "Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."
              ]
            }
          ]
          , "computation":
          [
            {
              "name":"three_layer_nn_host.cl:131"
              , "data":
              [626, 1985, 13, 0]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                    , "line":131
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
                    [141, 0, 0, 0]
                  }
                  , "count":1
                }
                , {
                  "info":
                  {
                    "name":"Load"
                    , "data":
                    [453, 1985, 13, 0]
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
              "name":"three_layer_nn_host.cl:132"
              , "data":
              [413, 2128, 16, 0]
              , "debug":
              [
                [
                  {
                    "filename":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl"
                    , "line":132
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
                    [15, 0, 0, 0]
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
                , {
                  "info":
                  {
                    "name":"Store"
                    , "data":
                    [366, 2128, 16, 0]
                  }
                  , "count":1
                }
              ]
            }
          ]
        }
        , {
          "name":"Block17"
          , "resources":
          [
            {
              "name":"State"
              , "data":
              [32, 93, 0, 0]
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
                    [32, 93, 0, 0]
                  }
                  , "count":0
                }
              ]
            }
          ]
          , "computation":
          [
          ]
        }
      ]
    }
  ]
}
;var fileJSON=[{"index":0, "path":"h:/3 Year Project/OpenCL/3 Layer NN/3_Layer_NN_host/device/three_layer_nn_host.cl", "name":"three_layer_nn_host.cl", "content":"//////////////////////////////////////////////////////////////////\012//Made by Samyuel Danyo on 06/11/2017\012/////////////////////////////////////////////////////////////////\012//This is OpenCL ACL kernel implementing a 3 Layer NN classification of \012//MNIST handwritten dataset. It is written for altera FPGA, synthesized with\012//altera SDK\012\012#ifndef three_layer_nn_glb\012#define three_layer_nn_glb\012#define cl_khr_fp64\012#endif\012\012#ifdef cl_khr_fp64\012    #pragma OPENCL EXTENSION cl_khr_fp64 : enable\012#elif defined(cl_amd_fp64)\012    #pragma OPENCL EXTENSION cl_amd_fp64 : enable\012#else\012    #error \"float precision floating point not supported by OpenCL implementation.\"\012#endif\012\012//Channels can be used only with altera FPGA OpenCL SDK, for other SDKs\012//channels need to be replaced with pipes\012//Channeled kernels cannot be vectorized with SIMD, as that may result in\012//Multiple CU trying to write the same channel.\012//#pragma OPENCL EXTENSION cl_altera_channels : enable\012\012channel float OUT_HL_1;\012channel float OUT_HL_2;\012\012#define wg_size 14000\012#define INPUT_N 784\012#define HL_1_N 500\012#define HL_2_N 150\012#define OL_N 10\012#define RELU(x) (x > 0 ? x : 0)\012#define SIGMOID(x) (1.0f / (1 + exp(-x)))\012//#define W_HL_1(f,n) W_HL_1[f*HL_1_N + n]\012//#define W_HL_2(f,n) W_HL_2[f*HL_2_N + n]\012//#define W_OL(f,n) W_OL[f*OL_N + n]\012//#define X_test(x,y) X_test[x*INPUT_N + y]\012#define Y(x,y) Y[x*OL_N + y]\012\012__kernel\012//if there is more then 1 device the required wg_size needs to be changed!\012//__attribute__((reqd_work_group_size(wg_size, 1, 1)))\012void HL_1_RELU(__global float *restrict X_test,\012		__global float *restrict W_HL_1,\012		__global float *restrict B_HL_1)\012{\012	// Get index of the work item (offset within the NDRange)\012	int img = get_global_id(0);\012\012	__local float activation;\012//	printf(\"Starting Image: %d\",img);\012	// n for neuron index, f for feature index\012	//#pragma unroll\012	for(int n = 0; n < HL_1_N; n++)\012	{	\012		activation = 0.0f;\012		//#pragma unroll\012		for(int f = 0; f < INPUT_N; f++)\012		{\012			activation += X_test[img*INPUT_N + f] * W_HL_1[n*INPUT_N + f];\012		}\012		activation += B_HL_1[n];\012		activation = RELU(activation);\012		write_channel_altera(OUT_HL_1, activation);\012	}\012}\012\012__kernel\012//if there is more then 1 device the required wg_size needs to be changed!\012//__attribute__((reqd_work_group_size(wg_size, 1, 1)))\012void HL_2_SIG(__global float *restrict W_HL_2,\012		__global float *restrict B_HL_2)\012{\012	// The offset within the NDRange (which image is processed is implied via the channel)\012\012	__local float activation;\012	__local float features[HL_1_N];\012	// n for neuron index, f for feature index\012	//#pragma unroll\012	for(int f = 0; f < HL_1_N; f++)\012	{\012		features[f] = read_channel_altera(OUT_HL_1);\012	}\012	\012	//#pragma unroll\012	for(int n = 0; n < HL_2_N; n++)\012	{	\012		activation = 0.0f;\012		//#pragma unroll\012		for(int f = 0; f < HL_1_N; f++)\012		{\012			activation += features[f] * W_HL_2[n*HL_1_N + f];\012		}\012		activation += B_HL_2[n];\012		activation = SIGMOID(activation);\012		write_channel_altera(OUT_HL_2, activation);\012	}\012}\012\012__kernel\012//if there is more then 1 device the required wg_size needs to be changed!\012//__attribute__((reqd_work_group_size(wg_size, 1, 1)))\012void OL_SOFTMAX(__global float *restrict W_OL,\012		__global float *restrict B_OL,\012		__global float *restrict Y)\012{\012	// The offset within the NDRange (which image is processed is implied via the channel)\012\012	int img = get_global_id(0);\012	__local float activation;\012	__local float features[HL_2_N];\012	// n for neuron index, f for feature index\012	//#pragma unroll\012	for(int f = 0; f < HL_2_N; f++)\012	{\012		features[f] = read_channel_altera(OUT_HL_2);\012	}\012	\012	//#pragma unroll\012	for(int n = 0; n < OL_N; n++)\012	{	\012		activation = 0.0f;\012		//#pragma unroll\012		for(int f = 0; f < HL_2_N; f++)\012		{\012			activation += features[f] * W_OL[n*HL_2_N + f];\012		}\012		activation += B_OL[n];\012		Y(img,n) = activation;\012	}\012}\012"}];