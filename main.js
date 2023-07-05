// // **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// // // ***************************
// // //          PART ONE
// // // ***************************
// // // Write a JavaScript program to display the current day and time, start with:
// // console.log(new Date)

// const displayDate = () => {

//   const currentDate = new Date();
  
//   document.getElementById("display-element").innerHTML = currentDate;
// }

// // // Write a JavaScript program to convert a number to a string.
// const numberToString = () => {
//   let x = 2423253435;
  
//   x = x.toString();

//   console.log("The type of x is " + typeof x)
//   //send to DOM
//   document.getElementById("num-str").innerHTML = x;
  
// }

// // Write a JavaScript program to convert a string to the number.
// const strToNum = () => {
//   a = "144";
//   const b = parseInt(a);
//   console.log(typeof b)
//   document.getElementById("str-num").innerHTML = typeof b;
// }



// // Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// const printDataType = (data) => {
//   if (typeof data === 'boolean') {
//     console.log(data + ' is a boolean.');
//   } else if (data === null) {
//     console.log(data + ' is null.');
//   } else if (typeof data === 'undefined') {
//     console.log(data + ' is undefined.');
//   } else if (typeof data === 'number') {
//     if (isNaN(data)) {
//       console.log(data + ' is NaN.');
//     } else {
//       console.log(data + ' is a number.');
//     }
//   } else if (typeof data === 'string') {
//     console.log(data + ' is a string.');
//   } else {
//     console.log('Unknown data type.');
//   }
//   document.getElementById("str-num").innerHTML = typeof b;
// }



// Example usage
// let a = true;
// let b = null;
// let c;
// let d = 123;
// let e = 'Hello';
// let f = '123';
// let g = NaN;

// printDataType(a);  // Output: true is a boolean.
// printDataType(b);  // Output: null is null.
// printDataType(c);  // Output: undefined is undefined.
// printDataType(d);  // Output: 123 is a number.
// printDataType(e);  // Output: Hello is a string.
// printDataType(f);  // Output: 123 is a string.
// printDataType(g);  // Output: NaN is NaN.
    
//   //  Boolean
//  let b = true 
//  console.log("b is " + typeof b)
  
//  ////  Null
//   let d = null
//   console.log("d is " + d)
  
//  //  Undefined
//   let c;
//   console.log("c is " + typeof c)
  
// //   Numbers
//   let e = 123 
//   console.log("e is a " + typeof e)
  
// //   NaN
//   let a = 25 * '100f' 
//   console.log("a is " + a)
  
// //   String
//   let f = '123'
//   console.log("f is type " + typeof f)

//   getComputedStyle.ElementById("var-types").innerHTML = "The typeof a is " + typeof a;
// }
  
  
  // I THINK I AM JUST MISSING THE EQUALS I WILL COME BACK TO THIS!!!!!
  //ntd: html-ASK DURING THE CLASS TOMORROW!!!
  // Write a JavaScript program that adds 2 numbers together
  // const add = (numA, numB) => {
  //   const sum = numA + numB;
  //   return sum;
  // };
  // console.log(add( 1, 1))
//   let firstNum = null;
//   let secondNum = null;
// let operation = null;
//   const saveFirstNumber = (num) => {
//   firstNum = parseInt(num);
// };
// const saveSecondNumber = (num) => {
//   secondNum = parseInt(num);
// };

// const add = (numA, numB) => {
//   const sum = numA + numB;
//   return sum;
// };
// const changeOperation = (chosenOperation) => {
//   operation = chosenOperation;
// };
// const putResultInElement = (operationResults) => {
//   document.getElementById("result").innerHTML = "Results: " + operationResults
// };

// const equals = () => {
//   switch (operation) {
//     case "addition":
//       putResultInElement(add(firstNum, secondNum));
//       break;
//   }
// };




// Write a JavaScript program that runs only when 2 things are true.
// The logical AND (&&) (logical conjunction) operator for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.
// const a = true;
// const b = true;

// if (a && b) {
//   //this code will be executed when both conditions are true
//   console.log("Both conditions are true!");
// }




// Write a JavaScript program that runs when 1 of 2 things are true.
// const b = true;
// const a = false;

// const ifOneOfTwo = () => {
//   if ((a && !b) || (!a && b))
//     // console.log("when one of two things is true");
  
  
//   document.getElementById("onoftwo").innerHTML = ifOneOfTwo();
//}
//WRONG BUT SAVE FOR LATER
// // The logical OR ( || ) (logical disjunction) operator for a set of operands is true if and only if one or more of its operands is true. It is typically used with boolean (logical) values. When it is, it returns a Boolean value.
// const c = false;
// const d = true;

// if (a || b) {
//   // code will be executed when at least one condition is true
//   console.log("at least one condition is true!")
// }
// ---------------
// Write a JavaScript program that runs when both things are not true.  
// const a = false;
// const b = false;

// if (!a && !b) {
//   console.log("both conditions are not true!")
//}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
