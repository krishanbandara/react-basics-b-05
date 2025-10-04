## Session 04 - Assessment

### Questions

1. What are the three states of a `Promise`?
   * Pending 
   * FullFill 
   * Rejected
2. How does the `async` keyword affect a function's return value?
   * The async keyword makes a function always return a Promise, wrapping returned values in a resolved   Promise and errors in a rejected Promise.
3. Explain the purpose of the `await` keyword.
   * The await keyword in JavaScript is used inside an async function to pause the execution of that function until a Promise is settled (either resolved or rejected).

4. What is a callback function and how is it used in asynchronous operations?

* A callback function is simply a function that you pass as an argument to another function, so that it   can be called later when an operation is finished.

5. Describe the role of the event loop in JavaScript.

* The event loop is a mechanism in JavaScript that allows it to handle asynchronous operations (like  timers, promises, I/O tasks) even though JavaScript itself is single-threaded.

It continuously checks:
* Call Stack → are we currently running any code?
* Callback/Task Queue & Microtask Queue → are there pending async callbacks or promise handlers that need to run?
It ensures JavaScript can execute code, handle events, and process async tasks without blocking.

6. Write a function called `delayedGreeting` that takes a name as an argument and logs a greeting message to the console after a 2-second delay using `setTimeout`. Use a callback function to achieve this.

```bash
function delayedGreeting(callback){

setTimeout(()=>{
let name ="john";
callback(name);
},2000);

}

function greeting(name){
console.log("wish you",name);
}

delayedGreeting(greeting);


```




