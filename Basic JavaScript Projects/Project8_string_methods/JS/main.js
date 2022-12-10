var wholeString;//defining GLobal variable

function Conacatenating_Strings() {
    var String1 = "My ";//initializing 5 string variables
    var String2 = "name ";
    var String3 = " is";
    var String4 = " James";
    var String5 = " Bond";
    wholeString = String1.concat(String2, String3, String4, String5);//concatenate the 5 strings
    document.getElementById("Concatenate").innerHTML = wholeString;//display the concatenated string 
}

function SliceString(){
    var slicedString = wholeString.slice(12,17);//using slice function to get the string from position 12 to position 17
    document.getElementById("Slice").innerHTML = slicedString;
}

function UpperCase() {
    document.getElementById("ToUpper").innerHTML = wholeString.toUpperCase();//make all of the characters of the string wholeString Upper Case
}

function Srch() {
    document.getElementById("Search").innerHTML = wholeString.search("James") + " is the starting position";//get the starting position of the string James
}

function toStr() {
    var N = 1E10;
    document.getElementById("ToStr").innerHTML = N.toString();//convert the variable N to string 
}

function toPrec() {
    var i = 10.66666666;
    document.getElementById("ToPrec").innerHTML = i.toPrecision(5);//make the variable i with precision of 5 digits
}

function toFix() {
    var i = 10.66666666;
    document.getElementById("ToFix").innerHTML = i.toFixed();//make the variable i fixed number
}

function valOf() {
    var i = "Hello World";
    document.getElementById("valOf").innerHTML = i.valueOf();//display the value of the variable i
}


