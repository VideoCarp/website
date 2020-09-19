# Python version, to be compiled to JS

# Grabs from HTML doc.
not_hl = document.getElementById("tohighlight");

# List of all keywords.
keyword_list = ["detect", "type=", "c=", "r=", "@e", "@s", "@p", "@r", "name=",
                "showcoordinates", "alwaysday", "commandblockoutput", "false",
                "true", "immediaterespawn", "falldamage", "dotiledrops", "keepinventory"
                , "commandfeedback", "randomtickspeed", "tick", "dummy"
                , "armor_stand", "entity", "domobspawning", "rawtext"];

# Not sure if it's there on JS, so this.
intlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

# List of Symbols
symbol_list = ["~", "!", "[", "]", ":", "(", ")", "/", "=", "+", "-"]

# Major Commands List
cmd_list = ["execute", "spreadplayers", "tag", "testfor",
            "testforblock", "testforblocks", "setblock", "fill",
            "effect", "teleport", "summon", "clear", "give", "tellraw", "title", "particle", "scoreboard"];

# Split into Array
split_input = not_hl.split();

# Determine keywords, commands, and symbols.
ending = None # default value

for symbol in symbol_list:
  ending = split_input.replace(symbol, f"<symbolify>{symbol}</symbolify>");

for cmd in cmd_list:
  ending = ending + split_input.replace(cmd, f"<commandify>{cmd}</commandify>");

for word in keyword_list:
  ending = ending + split_input.replace(word, f"<keywordify>{word}</keywordify>");

for number in intlist:
  ending = ending + split_input.replace(number, f"<numberify>{number}</numberify>");

actually_ended = ending.replace("[", "").replace("]", "").replace("'", "").replace('"', '').replace(",", "");
document.getElementById("tohighlight").innerHTML(actually_ended);

