function Add() { //function that adds 2 numbers
    var i=2; //defining first number 
    var j=3 //defining second number
    document.getElementById("Math").innerHTML = "2+3=" + (i+j); //show the result when the mouse goes over the paragraph with id "Math" 
}

function Subtract() { //function that subtracts 2 numbers
    var i=2; //defining first number 
    var j=3 //defining second number
    document.getElementById("Math2").innerHTML = "2-3=" + (i-j); //show the result when the mouse goes over the paragraph with id "Math2" 
}

function Multiply() { //function that multiplies 2 numbers
    var i=2; //defining first number
    var j=3 //defining second number
    document.getElementById("Math3").innerHTML = "2*3=" + (i*j); //show the result when the mouse goes over the paragraph with id "Math3"
}

function Divide() { //function that divides 2 numbers
    var i=2; //defining first number
    var j=3 //defining second number
    document.getElementById("Math4").innerHTML = "2/3=" + (i/j); //show the result when the mouse goes over the paragraph with id "Math4"
}

function Multiple_Operations() { //function with multiple operations
    var i=2; //defining first number
    var j=3; //defining second number
    var x=4; //defining third number
    var y=5; //defining fourth number
    document.getElementById("Math5").innerHTML = "2+3/4-5*2=" + (i+j/x-y*i); //show the result when the mouse goes over the paragraph with id "Math5"
}

function Modulus_Operator() { //function with modulus operator
    document.getElementById("Math6").innerHTML = "2/3=" + (2/3) + " and remainder " + (2%3); //show the result when the mouse goes over the paragraph with id "Math6"
}

function Unary_Operator() { //function with unary operator
    var i = 5; //define a number
    document.getElementById("Math7").innerHTML = "Negation of " + i + " is " + (-i) ; //show the result when the mouse goes over the paragraph with id "Math7"
}
function Increment_Decrement() { //function with increment and decrement operators 
    var i=0; //define number for increment
    var j=100; //define number for decrement
    i++; //increment i
    j--; //decrement j
    document.getElementById("Math8").innerHTML = i + " " + j; //show the result when the mouse goes over the paragraph with id "Math8"
}

document.write(Math.random()*10); //print random number from 1 to 10
document.write("<br>" + Math.round(5.6)); //round the number 5.6 and print it