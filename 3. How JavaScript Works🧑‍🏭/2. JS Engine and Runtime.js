/*

JavaScript Engine Overview

Definition: A JavaScript engine is a program that executes JavaScript code.
Examples: Each browser has its own engine, such as Google’s V8, which powers Google Chrome and Node.js.
Components:
Call Stack: Executes code using execution contexts.
Heap: An unstructured memory pool storing objects needed by applications.
Compilation vs. Interpretation

Compilation: Converts the entire source code to machine code at once, which can be executed on any computer.
Example: Applications on a computer have been compiled before execution.
Interpretation: Code is read and executed line by line, making it slower than compiled code.
Just-in-Time (JIT) Compilation

Modern JavaScript Engines: Use a mix of compilation and interpretation, compiling the code just before execution to improve performance.
Process:
Compiles code into machine code instantly.
Optimizes and recompiles code during execution without halting the program.
JavaScript Code Execution Process

Parsing:
The code is parsed into an Abstract Syntax Tree (AST), a structured format to represent the code.
The AST checks syntax errors and forms the basis for generating machine code.
Compilation: AST is converted into machine code, which the engine executes immediately.
Optimization:
Starts with an unoptimized machine code version for immediate execution.
Optimizes and updates code in the background without stopping execution, making engines like V8 faster.
Multithreading in JavaScript Engines

Background Threads: Handle parsing, compilation, and optimization separately from the main thread.
Main Thread: Executes the code using the call stack.

 */