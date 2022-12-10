var i = 15;//intializing Global variable

withGlobalVariable();//call function withGlobalVariable()
withLocalVariable();//call function withLocalVariable()
TestFunction();//call function TestFunction()

function withGlobalVariable(){
    document.write(i+20);//aad 20 to the Global variable i 
    document.write("<br>");//go in new line
}

function withLocalVariable(){
    var j = 30;//initializing Local variable j
    document.write(i+j);//add the Local variable j to the Global variable i
    document.write("<br>");//go in new line
}

function TestFunction(){
    console.log(i+j);//display the result of this operation in console
}

function Time() {
    var txt = "am";//variable for displaying am
    var h = new Date().getHours();//variable for the current hour
    if (h>=12)//conditional statement if h is equal or greater than 12 then txt has the value "pm" 
        txt = "pm";
    document.getElementById("Time").innerHTML = "Time: " + txt;//set the value of the element with id "Time" to the appropriate value
    
    if(document.getElementById("Time").innerHTML == "Time: am")
        alert("GOOD MORNING");//if the value of the element with id "Time" is "Time: am" display alert message GOOD MORNING
    if(document.getElementById("Time").innerHTML == "Time: pm")
        alert("GOOD AFTERNOON");//if the value of the element with id "Time" is "Time: pm" display alert message GOOD AFTERNOON
}

function WorldCup() {//function that checks if the answer is correct to the question who won the last World Cup
    if(document.getElementById("Team").value == "France")//if the value of the element with id "Team" is "France"
        document.getElementById("Answer").innerHTML = "That's right!";//display "That's right!"
    else                                                              //else display "Sorry you are wrong!"
        document.getElementById("Answer").innerHTML = "Sorry you are wrong!";

}

function Time_function() {//function that tells which part of the day are we in
    var Time = new Date().getHours();//intialize the variable Time with the current hour
    var Reply;//define variable Reply
    if(Time < 12 == Time > 0) {//if Time is less than 12 and Time is greater than 0 then
        Reply = "It is morning time!";//Reply is set to "It is morning time!"
    }
    else if(Time > 12 == Time < 18) {//if Time is greater than 12 and Time is less than 18 then
        Reply = "It is the afternoon!";//Reply is set to "It is the afternoon!"
    }
        else {//in any other case set Reply to "It is evening time."" 
            Reply = "It is evening time."
        }
    document.getElementById("Time_of_day").innerHTML = Reply;
}


