function My_Second_Function() { // Defining a function and naming it
    var str = "After CLICK";// Defining a variable and giving it a string value
    var result = str.fontcolor("red");// Using fontcolor method on str variable
    document.getElementById("pgh1").innerHTML = result; //Putting the value of result into the HTML element with "pgh1" id
}

function My_Third_Function() { // Defining a function and naming it
    var str = " Concatenating strings"; // Defining a variable and giving it a string value
    document.getElementById("hdg1").innerHTML += str;// Using the operator += to concatenate 
                                                     //the str variable with the text inside the HTML 
                                                     //element with id "hdg1"
}