# Introduction
**Who's this book for?**
This book is for anyone interested in programming, who has found it difficult to get started.
**What this book covers:**
* Why program?
* The basic information needed to get started with programming.
* The different ways of programming.
* The art of Googling.
* Picking a programming language.
* Fields to program in.
**What this book does NOT cover:**
* How to program in a specific programming language
* Advanced programming theory
Programming is a wide, complex subject. And it isn't easy to start programming, because the terminology 
used can often be confusing. This book aims to fill in many of the gaps, and empower readers to 
overcome these barriers and become skilled Google users.

<details>
  <summary> Maths </summary>
  You might've heard that you need maths for programming. This is *kinda* true, but also not really.
  You need maths if you do AI or data science. But you don't need maths to make a website.
  There is some mathematical theory in programming, but it's not complex, so don't worry. The maths
  you need for programming depends on the subject, but in general, it's not hard.
</details>

# Why program?

Why should you program? This is the first important question to ask yourself. Are you interested in programming?
Perhaps you're a student? For work?
Whoever you are, programming is an enriching subject, that once understood, will be a useful or even fun tool to use. 
Programming may appear an impossible task, but don't let that affect you. It's just hard to get started. 


> ℹ️ Some subjects are very difficult in programming, but you'll find a lot are easy.

**The practical uses of programming:**  
Programming is applicable in a variety of fields and sometimes you don't even know you're using a program.
Programming is used in engineering, medicine, science, software development and plenty of others.
In regards to what programming can achieve, the answer is ”anything.” 
Any task you can think of, that can happen, can be programmed. 
Websites, applications, operating systems and general appliances are or can be programmed. 
In short, programming is useful if you need to make something happen at a more abstracted level.
**Programming as a hobby:**  
Programming can be a hobby, too. 
It can be a particularly enriching activity,
that will change your thinking for the better and help you understand things around you. 
It's not easy to describe it, but I'll also say is that it opens your mind.
# Programming basics
**Thinking programmatically:**  
The first step to get into programming is to understand how to think about it. 
First off, a "program" is a series of instructions to be executed by a computer. This definition has some computer
jargon. Simply, a "program" is a bunch of code that can be ran by a computer. Sometimes, programs are used
interchangeably with "source files," which are files that contain code written in a programming language.
So a program is what the computer understands and a source file is what you write. It's not too important to disting
uish these terms at this point, but you can.

> ℹ️ Collections of source files or programs that you might use to write a program can be known as "libraries"
> or "modules." Note that "libraries" have a shorthand: "libs."

So now you have a basic idea of how files are organised when programming. Another important part of thinking like
a programmer is to consider everything to be ordered instructions you give the computer. You tell the computer
to show "Hello World!" on the screen, it shows that. Think of it as telling the computer to "do this, then do that."

> ℹ️ You aren't telling the computer what to do in most cases. You're telling the programming language
> you're using to do that for you. If this doesn't make sense, do ignore it.

**Understanding what coding really is:**  
Coding has a hazy definition. But I would define it as creating a representation of what can end up being
a program later. So, things like Scratch still count as code and writing code in files counts too.
When you program, make sure to think of it as that.
**Writing code:**  
To recap:
* Program: something that the computer can execute, usually generated from a source file
* Source file: a file that is given to a programming language to produce a program
* Programming: creating a representation of what can end up being a program.
This won't help you much, yet. So, let's understand how to write code. In general, these are the patterns you'll
find in most programs.
* Functions
- Arguments
- Parameters
* Variables
- Constants
- Immutables
- Mutables
* References
* Types
- Strings
- Integers
- Floating-point numbers
- Lists and arrays.
- Tuples
* Control flow
- If statements
- While loops
- For loops
* Arithmetics: they're just maths.
This can look overwhelming. But once you get these, you'll find reading other docs a lot easier. Let's begin with
the simplest: variables. Variables are like pronumerals in maths, only they can be multiple characters.
##### Variables
A variable is a name for a value. For example, imagine a variable named `pi` with a value of `3.14159`.
Now, when you write `pi`, you get `3.14159`.
There are 3 basic kinds of variables, and they can be confusing. The most common are mutable variables. For example,
you define a variable named `x` as `5`. Then, you change `x` to `2`. Of course, because programs execute in order,
all code before you changed `x` to `2` will result in `5`. Unlike maths, variables can be defined in terms of themself.
So, if you had changed `x` to be `x + 1`, it would have been `5 + 1`, which is `6`. The other kinds, immutable and
constant variables can't change. They're not the same, but I won't confuse you.
##### References
References are simply when you write a name for something, like an identifier or a function.
Not much else to say.
##### Functions
Functions are used to name and reuse bits of code you have written. For example, imagine a program that adds
`5` and `2` and outputs it, but you want that to happen many times, not just once. In this case, one solution
would be to use a function. You'd name your function whatever you want, with parameters and a body.
Parameters are *variables* that can take *arguments* from the programmer calling the function. Arguments
are just any value that will make sense in the function's body, at the simplest level. The function's body
is the code inside it. For example, imagine a function named `add1` with the parameter `num` and the body
`return num + 1`. If you call `add1` with `1` as the argument for the parameter `num`, then you'll get
`2`. `return` usually means what the function should result in.
This is kind of similar to functions in mathematics, for example `f(x) = x + 1`.
##### Control Flow
I want something to happen only if a certain condition is met. How do I do that? By using what is called an `if`
statement. An `if` statement is composed of a condition and a body. A condition is exactly what it sounds like.
For example, an `if` statement with the condition that `pi > 3` and a body that outputs "Pi is greater than 3"
would run, only if `pi` is greater than 3. `if` statements can be accompanied with `else` and `else if` bodies.
`else` only happens if all conditions fail, and `else if`s only happens if all conditions above it fail.

What about if I want something to only happen while a condition is met? That's why the `while` keyword exists,
and it's pretty much the same as `if` in terms of use.

What if I want something to happen a set number of times? Here, you can use a `for` loop. The way they're used is
different in different programming languages, but generally, there is what's known as a control variable and the
number of iterations. A control variable is a variable that changes every time the body of the `for` loop is repeated
that you can access. Iterations are the repetitions of the body of the `for` loop.

Collectively, these are called control flow.
##### Types
Types are something you will hear a lot about in programming.
* Strings: text
* Integers: whole numbers, negative or not
* Floating-point numbers: numbers with a decimal place
* Lists and arrays: multiple same-type values that can be referenced using one name
* Tuples: multiple values that can be referenced using one name
There's also "typing," which doesn't refer to writing in a computer, but how types are default with.
* Dynamic typing: a variable's value can change type, and a function's parameters' values as well as its
  resulting (return) value can change type.
* Static typing: a variable's value cannot change type, a function's types cannot change

# Different ways to program
In programming terminology, different ways to program are known as paradigms. The most intuitive in my opinion
is procedural, imperative programming, which is what you have probably been using.
* Imperative: concerned with the "how" of the program
* Procedural: oriented towards programming-style functions. It is a sub-paradigm of imperative.
There's also object-oriented programming, which is quite common too.
* Object-oriented programming: oriented towards "objects." It is a sub-paradigm of imperative.
And there are declarative programming sub-paradigms, such as functional and markup.
* Declarative: concerned with the "what" of the program.
* Functional: oriented towards mathematical-style functions and immutable variables. It is a sub-paradigm of declarative.
* Markup: used to show meaningful imagery.
This book mainly focuses on imperative programming, and I suggest you stick to it for now.
It's not in the scope of this book to discuss at length programming paradigms, but if any interest you at some point,
then do search them up.
