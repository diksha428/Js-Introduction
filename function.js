//function excepts argument
//function add(a,b)
//{
  //  console.log(a+b)
    //return a+b
//}  //function declaration
//let sum=add(5,4) //function call
//console.log(sum)

//in javascript function are known as first class citizens
//you can treat function as variable in javaScript

//this is also known as function Expression
//let sayHi = function(a)
  //  console.log(a)
//} // anonymous function 
//this is also known as function expression
//sayHi(2) //anomynous function

// IIFE (immediately invoked function expression)


let add = (function(a,b){
    return a+b
})(10,20)

console.log(add)