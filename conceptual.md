### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Libraries like Axios and using async/await functions manage asynchronous code by allowing other code to run while a function awaits a response.
- What is a Promise?
  A promise is a response that has not been fulfilled yet.

- What are the differences between an async function and a regular function?
Async functions allow other code to run simultaneously while they await a response.
- What is the difference between Node.js and Express.js?
Node.js is a runtime environment that allows server-side scripting using JavaScript, while Express.js is a framework that allows for routing and error handling on the backend.
- What is the error-first callback pattern?
Error-first callback pattern attempts to catch errors before moving onto the remaining code.
- What is middleware?
Middleware refers to a collection of functions that assist in connecting the routing application to the user and database.
- What does the `next` function do?
  next() continues the flow of code after a function or route has completed its desired action.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
