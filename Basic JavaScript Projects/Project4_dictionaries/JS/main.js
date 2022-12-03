function myDictionary() { //defining funtion for the dictionary
    var Vehicle = { //defining object with properties key-value pair
        Type: "Car",
        Model: "Toyota",
        Color: "Red",
        Fuel: "Petrol",
        Engine: 1.4,
        //Engine: 1.6
    };
    delete Vehicle.Color; //deleting key "Color"
    document.getElementById("Dictionary").innerHTML = Vehicle.Engine;//displaying the value of the key "Engine"
    document.getElementById("Dictionary2").innerHTML = Vehicle.Color;//dsiplaying the value of the key "Color" in this case it doesn't exist
}
