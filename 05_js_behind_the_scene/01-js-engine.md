# Javascript engine 
A computer program that executes javascript code. ex - v8 engine in chrome and node.js (all the other web browsers have their own engines)

## Js engine contains 2 main components:

1. heap - unstructured memory pool which stores all the objects that our application needs. 
2. call stack - where our code is executed using something called execution contexts. 

## Compilation vs Interpretation
***Compilation*** 
- entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.

`source code` --compilation-> `machine code` --execution-> `program running`

* Execution can happen way after compilation. as machine code is stored in a portable file. can this portable file can be executed way after compilation step.

***Interpretation*** 
- interpreter runs through the source code and executes it line by line. no compilation step. interpreter needs to parse the code and run it immediately.

>Javascript engine uses both compilation and interpretation called just-in-time compilation. it compiles the entire code first, and then immediately executes it line by line
```
source code --compilation-> machine code --execution-> program running // there no portable file to execute. execution happens immediatly after compilation. This is called as just in time compilation.
``` 

# Javascript runtime ( browser, node etc.)
* A big container which including all the things that we need to use javascript.
* javascript engine (heart of every js runtime) + web apis ( dom, timers, fetchAPI etc.) + callback queue + event loop
    * web api - functionalities provided to the engine, accessible on the window object.
    
    * callback queue - This a data structure that containes all the callback functions that are ready to be executed. ( eg - attaching event handler function to dom element like a button to reach to certan events, these event handler function are also called callback functions.)
        * When a button is clicked, the callback function is put the the queue and when the call stack in js engine is empty, the callback function is passed to the stack for execution and this happend with `event loop`.
        * Event loop takes callback funciton from callback queue and put them to call stack for execution. `Essential for non blocking concurrency model.`