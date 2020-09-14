# Beginner's Guide to Commands
##### Exclusive to Bedrock Edition

                    ![rt](https://img.shields.io/badge/6%20minutes%2058%20seconds-estimated%20read%20time-green)<br>

This guide is unofficial, to be accompanied with the guide [here](https://gist.github.com/VideoCarp/eeaf915a2361d93f0fd8cf2c72d6db64).<br>
Firstly, since you're new I recommend **reading to full** and if possible with a **reader view**.<br>
If you don't have a reader view, or don't want one, safely ignore that.<br>
I know that this is quite long, but I mean it's useful, and it can be accompanied with my other guide.
You can contact me [here](https://discord.gg/4stpKau)
<br>
### What are commands?
----
Commands are bits of text that the game Minecraft understands, they can get quite advanced, but they're **easy** to pick up and learn.<br>
### Why commands?
---------------------
Commands are pretty much the only way to create Minecraft content, without a real coding language, and they're pretty cool.<br>
### Beginning
---------------------
Firstly I'm going to cover some logic, this is probably the **most important** part.<br>
There's a lot to cover, but I'm mostly going to be covering the beginner's basics.<br>
In Minecraft, there are 2 types of things, as I like to think of them. Those 2 things are entities and blocks.<br>
You might've heard of those a lot, and they're very important.<br>
<br>
**How to Read This**
This is kinda written weird, don't skip over any headers, unless you have full certainty of them.
## Basics
----
Here are some of the basics, read above for a bit of how to read this.
#### What is a block?
---------------------
A block is essentially an object that takes up a 1x1 space. An example of a block would be say grass, dirt, etc.<br>
Everything in the below image is a block, don't worry about the water just yet.<br>
<br>
                    ![grassblock](https://i.ibb.co/TqZjJ4m/FBB40-ECF-D2-F9-476-D-B56-B-1-EAA3-C6-D5-E08.png)<br>
#### What is an entity?
---------------------
An entity as I like to think of it is any object that is not fixed to it's position, and can take damage.<br>
Water isn't fixed to it's position, is it an entity? No, the reason for that is because water cannot take damage.<br>
**All mobs, but not only mobs** are entities.
Below is an example of an entity.<br>

                    ![chicken.png](https://i.ibb.co/DGbPNgQ/Webp-net-resizeimage.png)<br>

<br>
<br>
Now that you know what entities and blocks are, that's a step forward.<br>

### What is a syntax?
----
A quick explanation I'll give about syntaxes is that they're the format of the command, if your command doesn't<br>
execute, then there's a chance it's that. Give all syntax errors a full read, if they don't work, take reference<br>
from either my main guide or the `/help <command-name>` command while in game.<br>
An example of a syntax error is: `/kill @ e`. That specific one will be raised because there is a space between the<br>
`@` and the `e`. We'll go deeper into these `@` things in a bit. Below is an example of a syntax error.<br>
This most likely happened because the person didn't put an argument afterwards, but don't worry too much.<br>
                    ![error example](https://i.ibb.co/y590bt1/D20-D2-B44-1-A2-E-4-DF9-BB91-9238320-F5-A4-C.jpg)

### How do I read a syntax?
----
Here's a quick sumnary, it isn't really accurate (I personally don't read them and somehow know it):
* `<text_here>`. These brackets mean that this argument is **required**.
* `[text_here]`. These brackets mean that this argument is **optional**.
* `(option1 | option2)`. These brackets mean that this argument **must be one in the list**.
## Coordinate Management
----
This is a crucial part in commands.
## What are coordinates?
----
To put it in my way, coordinates are really just the location of an object. But how do you know the coordinates?<br>
How are coordinates formatted? Well, regarding both of them, there are three [axes](https://www.dictionary.com/browse/axis), namely X, Y, and Z.<br>
**How are they formatted?**<br>
The X and Y axes should be clear, otherwise click on the hyperlink.<br>
Things start on the Z axis, that's what different, it's kind of like X, think of it as just another X, the reason<br>
for the existence of the Z axis is because the game is in 3D, don't worry too much about it for now.<br>
**How does one get the coordinates of an object?**<br>
It's quite simple to do this, you **do not need to teleport** yourself. You can simply run this command:<br>
`/gamerule showcoordinates true` and your coordinates should show **at the top left**. Once they're showing, read the numbers after<br>
`Position`. It should look somewhat like this: `Position: X, Y, Z`. If it doesn't show exactly like that, don't panic.<br>
X, Y, and Z are used to represent the number, whatever it is, is where your legs are. We'll be getting into<br>
tildes on the next section, they will be necessary.
### What are Tildes?
----
Tildes are the `~` character, which in English means **about**, **near**, or **here**.<br>
Same thing goes for coordinates in Minecraft.<br>
Each tilde in a command represents from where the command is being executed, and math can be done on those.<br>
To add to the coordinate: `~<number>`. This goes for all X, Y, and Z axes.<br>
To remove from the coordinate: `~-<number>`. Note the `-`. This goes for all axes.<br>

Say you want the player to teleport 10 blocks upwards, remember the Y axis is vertical.<br>
`tp <target> ~ ~10 ~`.<br>
Now what is `target` you may ask. Target means the entity the command is being executed on.<br>
This command moves the player 10 blocks up from the command block if there is one, or the person who executed it.<br>
Don't worry yet about making the player do it, we'll cover it now.<br>
## Entity Management
----
Well this is a bad name for the section, but this section is for managing entities.<br>
There are a lot of commands that can affect entities, but here I'll cover the crucial ones.<br>
### Deleting an Entity
----
It's very easy to delete an entity, you can simply use the kill command to delete an entity.<br>
But what if you wanted to delete a dropped item, or perhaps a specific mob? Below is more info.<br>
### Targetting
----
You can use the target selector argument, which I will be specifying information about right here.<br>
You can use the `@e` targetting, but further than that is what we'll be focusing on.<br>
**@ Decorators**
No one calls them decorators other than me probably, so don't use that as terminology. Now<br>
what are these? Well, I like to explain these as the main argument in selecting which entity to use.<br>
A list of each one of them, and what they do is below:
* `@p` This selects the nearest player from where the command was executed.
* `@r` This selects a random player in the world who is online.
* `@s` This selects the **entity** that executed the command.
* `@a` This selects all the players.
* `@e` This selects all entites.
`@s` is one I just wanna talk a bit more about. It makes the entity that executed be executed on.<br>

For example, I want a creeper to say `Aww man` in the chat, I'd use:<br>
`execute @e[type=creeper,name="creep.er"] ~ ~ ~ say Aww man`.<br>
You see those things in the `[]` brackets? They will be covered next.<br>

`@e[type=<entity_type>` will select a specific type of entity, this could be TNT, a dropped item, a<br>
specific mob type, etc, it can find any entity type. But what if you wanted a specific entity?<br>
`@e[type=<entity_type>,name=<name>`. With that, you'll find one of a name.<br>
A very common issue I find others doing is when they're getting the name, they usually<br>
forget to add quotes after the `=` sign. If the mob has a space in the name, simply<br>
instead of `<name>`, imagine it becomes `"<name>"`.<br>
The name may be ugly, and so here is an alternative, this is also a way to group entities.
`/tag <target> (add | remove) <name: string>`.<br>
This will add a new group to the targetted entity, after adding it you can remove the name, if there is one.<br>
Now `string` means to add quotes, just like the name in the target selector.<br>
You may want to check for the range, here's how:
`@e[r=<range number>]`<br>
In most guides, `number` will be represented as `int` or `integer`. They both mean a number.<br>
## Execute
---
**This is an extremely important section!**
This section is fully dedicated to making entities execute a command, think of it as `sudo`, but for commands.<br>
The execute command is the **most powerful** command in the entire game, but don't worry, it isn't hard to<br>
pick up on.
`/execute <target> <location> <selected command syntax>` is the syntax. `<selected command syntax>`<br>
refers to the command you're getting the entity to execute. I always have my location as `~ ~ ~` and when it's<br>
like that, it executes anywhere, that's at least what I use for myself.<br>
But what if you wanted to check if someone was on a specific block type?<br>
`/execute <target> <location> detect <block to detect> <data value> <detectPos> <command>`.<br>
That would be your syntax. `detect` isn't in brackets, this means to just put it there, regardless.<br>
Say you wanted a creeper walking on grass to kill nearby ocelots, you'd use this:
``mcfunction
/execute @e[type=creeper] ~ ~ ~ detect grass 0 ~ ~-1 ~ kill @e[type=ocelot,r=5]``

Now that you've gotten this far, I believe you're ready for my other guide, which has a contents panel.<br>
Click [here](https://gist.github.com/VideoCarp/eeaf915a2361d93f0fd8cf2c72d6db64).<br>
Also quick notice, use the power of effect, armor stands, tags and names.


# Exporting your Map
##### There's a guide for functions in my other guide which is linked a bit above as a hyperlink.<br>
Visit [here](https://gist.github.com/VideoCarp/e6ac9264b545580c95f93ce76d12cc71) to see how to.
Give me feedback in the comments!<br>
### You can take a look at [some examples.](https://github.com/VideoCarp/carpcorps/tree/master/function_packs)
