function Call_Loop() {//example of while loop
    var i = 10;
    while(0 < i)//while variable i is greater then 0
        {
            document.getElementById("Loop").innerHTML += i + "<br>";//print the value of variable i 
            i--;//decrement variable i
        }
}

function StringLength() {//function that checks the length of a string
    var text = document.getElementById("stringLength").value;//initializing the variable text to the value of the element with id "stringLength"
    document.getElementById("resultStringLength").innerHTML = text.length + " is the length of your string";//displaying the result
}

var Instruments = ["Mandolin", "Bass", "Cello", "Guitar", "Violin"];//initializing the array Instruments
function for_Loop() {//example of for loop
    var n = Instruments.length;//get the number of items of the array Instruments and initialize the variable n with it
    for(i=0; i<n; i++) {//for loop
        if(Instruments[i] == document.getElementById("GuessTheInstrument").value){//if the value of the array(Instruments) item with index i is equal to the value of the element with id "GuessTheInstrument"
            document.getElementById("List_of_Instruments").innerHTML = "You guessed an instrument from the list";//display positive answer on the element with id "List_of_Instruments"
            break;//break the loop when the if condition is true
        }
        else//display negative answer otherwise 
            document.getElementById("List_of_Instruments").innerHTML = "You didn't guess an instrument from the list";
    }
}
function array_Function() {//example of array
    var Array = [];//define array named "Array"
    Array[0] = "I am";//initialize the first item
    Array[1] = "You are";//initialize the second item
    Array[2] = "He is";//initialize the third item
    Array[3] = "She is";//initialize the fourth item
    document.getElementById("Array").innerHTML = "Second person singular of the verb to be is " + Array[1];//display the second itme of the array "Array"
}

const Team = {sport: "Football", name: "Newcastle United", league: "EPL"};//initializing the properties of the object Team
function constant_function() {//example of const keyword
    Team.name = "Manchester United";//set the property name
    Team.country = "England";//set the property country
    document.getElementById("Constant").innerHTML = "The new next thing in football " + Team.name + " " + Team.country;//display both properties
}

{
    let Instruments = "Test";//using let in scope
    document.getElementById("Let").innerHTML = Instruments;
}

document.getElementById("Var").innerHTML = Instruments;//showing the difference between var and let



function sum_Function() {//example of function with return value
    var a = Number(document.getElementById("First").value);//initialize the variable a with the value of the element with id "First" and cast it to Number
    var b = Number(document.getElementById("Second").value);//initialize the variable b with the value of the element with id "Second" and cast it to Number
    document.getElementById("result").innerHTML = return_Function(a, b);//display the result of the function "result_Function"
    
    function return_Function(k, l) {//functio with return value
        return (k + l);//return the sum of k and l
    }
}

let aircraft = {//initialize object aircraft with the properties and methods
    type: "plane",
    model: "AirBus",
    number: "a320",
    company: "WizzAir",
    manual: function () {
        return "You can fly this aircraft " + 
                this.model + " " + this.number + " " + this.type + 
                " owned by " + " " + this.company + " only if you can have licence";

    }
}

document.getElementById("objectRef").innerHTML = aircraft.manual();//dispaly the return result of the method manual() of the object aircraft

var q = 5;//initialize the variable q to value 5
while(0 < q--) {//example of using the continue statement
    if(q != 3) continue;
    document.getElementById("ConStat").innerHTML = q;
}