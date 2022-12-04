document.write(typeof "Plane" + "<br>");//displays the data type of the variable
document.write(typeof 4 + "<br>");//displays the data type of the variable

document.write(0/0 + "<br>");//returns NaN(not a number)
document.write(isNaN("Txt") + "<br>");//checks if "Txt" is not a number and returns true
document.write(isNaN(7) + "<br>");//checks if 7 is not a number and returns false

document.write((1>2) + "<br>");//returns false because 1 is smaller than 2
document.write((1<2) + "<br>");//returns true because 1 is smaller than 2

console.log(1+5);//displays the result of the expression in the console
document.write(("11" + 5) + "<br>");//Type cercion conversion typical for JavaScript
console.log(1>2);//displays the result of the expression in the console

document.write((1==2) + "<br>");//returns false because 1 is not equal to 2
document.write((2==2) + "<br>");//returns true because 2 is equal to 2

document.write((1.2===1.2) + "<br>");//returns true because the operands are both the same type and with same values
document.write((1.2==="Horse") + "<br>");//returns false because the operands are different types and with different values
document.write(("1.2"===1.2) + "<br>");//returns false because the operands are different types
document.write((1.2===1) + "<br>");//returns false because the operands are with diferent values

document.write((2>1 && 4>3) + "<br>");//returns true because both operands are true
document.write((2>3 || 3>4) + "<br>");//returns false because both operands are false

document.write((!(2>3)) + "<br>");//returns true because there's negation on negation

document.getElementById("posInfinity").innerHTML = 2e309;//returns positive Infinity
document.getElementById("negInfinity").innerHTML = -2e309;//returns negative Infinity




