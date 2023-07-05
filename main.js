// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {

  const currentDate = new Date();
  
  document.getElementById("display-element").innerHTML = currentDate;
}

// Write a JavaScript program to convert a number to a string.
const numberToString = () => {
  let x = 2423253435;
  
  x = x.toString();

  console.log("The type of x is " + typeof x)
  //send to DOM
  document.getElementById("num-str").innerHTML = x;
  
}

// Write a JavaScript program to convert a string to the number.
const strToNum = () => {
  let y = '56789'
  
  let x = parseInt(y)

  console.log("The typeof x is " + typeof x)
  document.getElementById("str-num").innerHTML = x;

}

//re-try!!!
// // Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// const typeOfVars = () => {
    
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
  
  
  
  //re-try
  // Write a JavaScript program that adds 2 numbers together.
const add = (numA, numB) = (num) => {
  const sum = numA + numB;
  return sum;
  console.log("the sum of two numbers is " + sum)
  } 
  
  //re-try
// Write a JavaScript program that runs only when 2 things are true.
const twoAreTrue = (a,b) => {
  if {
    a = true;
    b = true;
    document.getElementById("two-tru").innerHTML=twoAreTrue()
  }
    else {
    document.getElementById("two-tru").innerHTML = "try again!";
    }
    
}


// Write a JavaScript program that runs when 1 of 2 things are true.
const x = love 
if{
  
}


// Write a JavaScript program that runs when both things are not true.  

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
