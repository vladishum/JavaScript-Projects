function Ride_Function() {//defining function called Ride_Function
    var Height, Can_ride;//defining variables Height and Can_ride
    Height = document.getElementById("Height").value;//Initializing the variable Height to the value of the html element with id "Height"
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";//Using ternary operator to initialize the variable Can_ride, 
                                                                           //if the variable Height is less than 52 then Can_ride is given "You are too short" value
                                                                           //if the variable Height is greater than 52 then Can_ride is given "You are tall enough" value
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";//display the variable Can_ride + " to ride." within the html element with id "Ride"
}

function Vote_Function() {//defining function called Vote_Function
    document.getElementById("Vote").innerHTML = ((document.getElementById("Age").value < 18) ? "You are too young" : "Yoa are old enough") + " to vote";
    //set the value of the element with id "Vote" depending on the value of the element with id "Age"
    //if the value of the element with id "Age" is less than 18 then value of element with id "Vote" will be "You are too young to vote" 
    //if the value of the element with id "Age" is greater than 18 then value of element with id "Vote" will be "You are old enough to vote"
}

function Vehicle(Make, Model, Year, Color) {//define the constructor of object type Vehicle
    this.Vehicle_Make = Make;//initialize the variable Vehicle_Make of the object type Vehicle
    this.Vehicle_Model = Model;//initialize the variable Vehicle_Model of the object type Vehicle
    this.Vehicle_Year = Year;//initialize the variable Vehicle_Year of the object type Vehicle
    this.Vehicle_Color = Color;//initialize the variable Vehicle_Color of the object type Vehicle
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");//intialize the object Jack of type Vehicle with the corresponding values
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");//intialize the object Jack of type Vehicle with the corresponding values
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");//intialize the object Jack of type Vehicle with the corresponding values
function myFunction() {
    document.getElementById("Kewords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
    //displaying the values of variables Vehicle_Color, Vehicle_Model and Vehicle_Year of the object of type Vehicle named Erik
}

function Club(Name, City, Sport, Year){//define the constructor of object type Club
    this.Name_T = Name;//initialize the variable Name_T of the object type Club
    this.City_T = City;//initialize the variable City_T of the object type Club
    this.Sport_T = Sport;//initialize the variable Sport_T of the object type Club
    this.Year_T = Year;//initialize the variable Year_T of the object type Club
   }
var Newcastle = new  Club("Newcastle United", "Newcastle", "Football", 1892);//intialize the object NewCastle of type Club with the corresponding values

function NewThisClub() { 
   document.getElementById("New_and_This").innerHTML = "Name of the team: " + Newcastle.Name_T + " City:" + Newcastle.City_T + " Sport: " + Newcastle.Sport_T + " Year: " + Newcastle.Year_T;
     //displaying the values of variables Name_T, City_t and Sport_T of the object of type Club named Newcastle
}
//var true = 5;
//document.write(true);

var p=0;//initialize the variable p to 0

function nested_Function() {
    var text = "Main function";//intialize the variable text to "Main function"
    var i = p;//give the value of variable p to variable i
    function_inAfunction();//call funtion_inAfunction()
        function function_inAfunction() {//define a nested function
            document.getElementById("Nested_Function").innerHTML = text + " " + i;//set the value of the element with id "Nested_Function" with the value of the variable text + the value ofi
            another_inAfunction();//call another_inAfunction()
                function another_inAfunction() {
                    document.getElementById("Nested_Function").innerHTML += " " + (++i);//concatenate the value of the element with id "Nested_Function" with incremented i value
                    p = i++;//give the value of incremented i to p
                }
        }   
}