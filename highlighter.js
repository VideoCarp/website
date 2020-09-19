/* THIS WAS COMPILED FROM PYTHON, CODE MAY BE DONE INEFFICIENTLY */
// (still writing it rn)
// This is just a sample script. Paste your real code (javascript or HTML)
var $B = __BRYTHON__;
var _b_ = __BRYTHON__.builtins;
var $locals = $locals___main__
$locals___main__.__package__ = ""
$locals.__annotations__ = $B.empty_dict()
var $top_frame = ["__main__", $locals___main__, "__main__", $locals___main__]
$locals.$f_trace = $B.enter_frame($top_frame)
var $stack_length = $B.frames_stack.length;
try {
    ;
    $locals.$line_info = "4,__main__";
    if ($locals.$f_trace !== _b_.None) {
        $B.trace_line()
    };
    _b_.None;
    $locals___main__["not_hl"] = $B.$call($B.$getattr($B.$global_search("$$document", ["__main__"]), "getElementById"))("tohighlight");;
    $locals.$line_info = "7,__main__";
    if ($locals.$f_trace !== _b_.None) {
        $B.trace_line()
    };
    _b_.None;
    $locals___main__["keyword_list"] = $B.$list(["detect", "type=", "c=", "r=", "@e", "@s", "@p", "@r", "name=", "showcoordinates", "alwaysday", "commandblockoutput", "false", "true", "immediaterespawn", "falldamage", "dotiledrops", "keepinventory", "commandfeedback", "randomtickspeed", "tick", "dummy", "armor_stand", "entity", "domobspawning", "rawtext"]);;
    $locals.$line_info = "14,__main__";
    if ($locals.$f_trace !== _b_.None) {
        $B.trace_line()
    };
    _b_.None;
    $locals___main__["intlist"] = $B.$list([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);;
    $locals.$line_info = "17,__main__";
    if ($locals.$f_trace !== _b_.None) {
        $B.trace_line()
    };
    _b_.None;
    $locals___main__["symbol_list"] = $B.$list(["~", "!", "[", "]", ":", "(", ")", "/", "=", "+", "-"]);;
    $locals.$line_info = "20,__main__";
    if ($locals.$f_trace !== _b_.None) {
        $B.trace_line()
    };
    _b_.None;
    $locals___main__["cmd_list"] = $B.$list(["execute", "spreadplayers", "tag", "testfor", "testforblock", "testforblocks", "setblock", "fill", "effect", "teleport", "summon", "clear", "give", "tellraw", "title", "particle", "scoreboard"]);;
    $locals.$line_info = "25,__main__";
    if ($locals.$f_trace !== _b_.None) {
        $B.trace_line()
    };
    _b_.None;
    $locals___main__["split_input"] = $B.$call($B.$getattr($locals___main__["not_hl"], "split"))();;
    $locals.$line_info = "28,__main__";
    if ($locals.$f_trace !== _b_.None) {
        $B.trace_line()
    };
    _b_.None;
    $locals___main__["ending"] = "";;
    $locals.$line_info = "30,__main__";
    if ($locals.$f_trace !== _b_.None) {
        $B.trace_line()
    };
    _b_.None;
    var $iter394 = $locals___main__["symbol_list"];
    $locals["$next394"] = $B.$getattr($B.$iter($iter394), "__next__")
    while (true) {
        try {
            $locals___main__["symbol"] = $locals["$next394"]();
        } catch ($err) {
            if ($B.is_exc($err, [_b_.StopIteration])) {
                break;
            } else {
                throw ($err)
            }
        };
        $locals.$line_info = "31,__main__";
        if ($locals.$f_trace !== _b_.None) {
            $B.trace_line()
        };
        _b_.None;
        $locals___main__["ending"] = $B.$call($B.$getattr($B.$check_def("split_input", $locals___main__["split_input"]), "replace"))($B.$check_def("symbol", $locals___main__["symbol"]), '<symbolify>' + _b_.str.$factory($B.$check_def("symbol", $locals___main__["symbol"])) + '</symbolify>');
        $locals.$line_info = "30,__main__";
        if ($locals.$f_trace !== _b_.None) {
            $B.trace_line()
        };
        _b_.None;
    };
    $locals.$line_info = "33,__main__";
    if ($locals.$f_trace !== _b_.None) {
        $B.trace_line()
    };
    _b_.None;
    var $iter395 = $locals___main__["cmd_list"];
    $locals["$next395"] = $B.$getattr($B.$iter($iter395), "__next__")
    while (true) {
        try {
            $locals___main__["cmd"] = $locals["$next395"]();
        } catch ($err) {
            if ($B.is_exc($err, [_b_.StopIteration])) {
                break;
            } else {
                throw ($err)
            }
        };
        $locals.$line_info = "34,__main__";
        if ($locals.$f_trace !== _b_.None) {
            $B.trace_line()
        };
        _b_.None;
        $locals___main__["ending"] = $B.add($B.$check_def("ending", $locals___main__["ending"]), $B.$call($B.$getattr($B.$check_def("split_input", $locals___main__["split_input"]), "replace"))($B.$check_def("cmd", $locals___main__["cmd"]), '<commandify>' + _b_.str.$factory($B.$check_def("cmd", $locals___main__["cmd"])) + '</commandify>'));
        $locals.$line_info = "33,__main__";
        if ($locals.$f_trace !== _b_.None) {
            $B.trace_line()
        };
        _b_.None;
    };
    $locals.$line_info = "36,__main__";
    if ($locals.$f_trace !== _b_.None) {
        $B.trace_line()
    };
    _b_.None;
    var $iter396 = $locals___main__["keyword_list"];
    $locals["$next396"] = $B.$getattr($B.$iter($iter396), "__next__")
    while (true) {
        try {
            $locals___main__["word"] = $locals["$next396"]();
        } catch ($err) {
            if ($B.is_exc($err, [_b_.StopIteration])) {
                break;
            } else {
                throw ($err)
            }
        };
        $locals.$line_info = "37,__main__";
        if ($locals.$f_trace !== _b_.None) {
            $B.trace_line()
        };
        _b_.None;
        $locals___main__["ending"] = $B.add($B.$check_def("ending", $locals___main__["ending"]), $B.$call($B.$getattr($B.$check_def("split_input", $locals___main__["split_input"]), "replace"))($B.$check_def("word", $locals___main__["word"]), '<keywordify>' + _b_.str.$factory($B.$check_def("word", $locals___main__["word"])) + '</keywordify>'));
        $locals.$line_info = "36,__main__";
        if ($locals.$f_trace !== _b_.None) {
            $B.trace_line()
        };
        _b_.None;
    };
    $locals.$line_info = "39,__main__";
    if ($locals.$f_trace !== _b_.None) {
        $B.trace_line()
    };
    _b_.None;
    var $iter397 = $locals___main__["intlist"];
    $locals["$next397"] = $B.$getattr($B.$iter($iter397), "__next__")
    while (true) {
        try {
            $locals___main__["number"] = $locals["$next397"]();
        } catch ($err) {
            if ($B.is_exc($err, [_b_.StopIteration])) {
                break;
            } else {
                throw ($err)
            }
        };
        $locals.$line_info = "40,__main__";
        if ($locals.$f_trace !== _b_.None) {
            $B.trace_line()
        };
        _b_.None;
        $locals___main__["ending"] = $B.add($B.$check_def("ending", $locals___main__["ending"]), $B.$call($B.$getattr($B.$check_def("split_input", $locals___main__["split_input"]), "replace"))($B.$check_def("number", $locals___main__["number"]), '<numberify>' + _b_.str.$factory($B.$check_def("number", $locals___main__["number"])) + '</numberify>'));
        $locals.$line_info = "39,__main__";
        if ($locals.$f_trace !== _b_.None) {
            $B.trace_line()
        };
        _b_.None;
    };
    $locals.$line_info = "42,__main__";
    if ($locals.$f_trace !== _b_.None) {
        $B.trace_line()
    };
    _b_.None;
    $locals___main__["actually_ended"] = $B.$call($B.$getattr($B.$call($B.$getattr($B.$call($B.$getattr($B.$call($B.$getattr($B.$call($B.$getattr($locals___main__["ending"], "replace"))("[", ""), "replace"))("]", ""), "replace"))("'", ""), "replace"))('"', ''), "replace"))(",", "");;
    $locals.$line_info = "43,__main__";
    if ($locals.$f_trace !== _b_.None) {
        $B.trace_line()
    };
    _b_.None;
    $B.$call($B.$getattr($B.$call($B.$getattr($B.$global_search("$$document", ["__main__"]), "getElementById"))("tohighlight"), "innerHTML"))($locals___main__["actually_ended"]);
    $B.leave_frame({
        $locals,
        value: _b_.None
    })
} catch (err) {
    $B.leave_frame({
        $locals,
        value: _b_.None
    })
    throw err
}
