window.alert("Hello, World!");
document.write("Hello, World!");
var A = "<br>This is a String!";
document.write(A);
var B = 2022;
window.alert(B);
document.write("<br>I\'m a \"MASTER\" they say");
var C = A + B;
document.write(C);
var Car="Volvo", Plane="Airbus", Bike="Honda", Ship="Titanic",
        Me="Vlad";
Car = Car.fontcolor("blue");
Plane = Plane.fontcolor("yellow");
Bike = Bike.fontcolor("green");
Ship = Ship.fontcolor("pink");
Me = Me.fontcolor("red");
document.write("<br>" + Car + Plane + Bike + Ship + Me);
var i = 5 + 7;
document.write("<br>" + i);

function My_Fisrt_Function() { //Defining a function and namimg it
    var str = "This text is blue!"; //Defining a variable and giving it a string value
    var result = str.fontcolor("blue"); //Using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result; //Putting the value of result into HTML element with "Gree_Text" id
}