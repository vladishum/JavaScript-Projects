function countdown() {
    var seconds = document.getElementById("seconds").value;//initialize the variable seconds with the value in the element with id "seconds"

    function tick() {//nested function
        seconds = seconds - 1;//start decrementing the variable seconds
        timer.innerHTML = seconds;//show how many seconds are left
        setTimeout(tick, 1000);//execute function tick after every 1000 milliseconds

        if(seconds == -1) {//if secconds equals -1 then show alert message "Time's up"
            alert("Time's up!");
        }
    }

    tick();//execute tick() function
}

let slideIndex = 1; //initialize variable slideIndex to 1
showSlides(slideIndex);//execute function showSlides() with the variable slideIndex as parametar

function plusSlides(n) {//function with nested function
  showSlides(slideIndex += n);//execute showSlides() function with the parametar slideIndex incremented by n taken like parametar with the plusSlide() function
}

function currentSlide(n) {//function to show our current slide
  showSlides(slideIndex = n);//execute showSlides() function with the parametar slideIndex initialized to the value n
}

function showSlides(n) {//function which deals with displaying the pictures
  let i;//varibale i that will be used only in this scope
  let slides = document.getElementsByClassName("mySlides");//variable slides to get the element that belongs to the class my Slides
  let dots = document.getElementsByClassName("dot");//variable dots to get the element that belongs to the class dot
  if (n > slides.length) {slideIndex = 1}//if n is bigger than the number of slides than set the varaible slideIndex to 1    
  if (n < 1) {slideIndex = slides.length}//if n is less than 1 than set the variable slideIndex to number of slides
                                         //the fisrt is basicaly saying if you come to the end of the slideshow and you keep pushing forward
                                         //then start form the begining
                                         //the second line is the oposite way if you keep going backwards and come to the begining of the slideshow 
                                         //then start from the end
  for (i = 0; i < slides.length; i++) { //this for loop sets the containers with the slides
    slides[i].style.display = "none";  //don't show them 
  }
  for (i = 0; i < dots.length; i++) {//loop for the dots below the pictures
    dots[i].className = dots[i].className.replace("active", "");//set them not to be active
  }
  slides[slideIndex-1].style.display = "block";//display the current slide  
  dots[slideIndex-1].className += " active";//set active the current dot representing the current slide
}
