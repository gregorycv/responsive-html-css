// JavaScript source code
window.onload = function ()
{
    var slides = document.querySelectorAll(".feedback");
    var logos = document.querySelectorAll(".logos");
   
    var leftButton = document.querySelector("#prevbtn");
    var rightButton = document.querySelector("#nextbtn");
    var logoBelt = document.querySelector("#logobelt");

    var current = 0;
    var clickedLogo = 0;


    //next slide
    function slideRight()
    {
        slides[current].classList.toggle("showfeedback");
        logos[current].classList.toggle("activelogo");
       current++;
       if (current < slides.length)
       {
           slides[current].classList.toggle("showfeedback");
           logos[current].classList.toggle("activelogo");
       }
       else
       {
           current = 0;
           slides[current].classList.toggle("showfeedback");
           logos[current].classList.toggle("activelogo");
       }
        
    }

    //prev slide
    function slideLeft()
    {
        slides[current].classList.toggle("showfeedback");
        logos[current].classList.toggle("activelogo");
        current--;
        if (current < 0)
        {
            current = slides.length - 1;
            slides[current].classList.toggle("showfeedback");
            logos[current].classList.toggle("activelogo");
        }
        else
        {
            slides[current].classList.toggle("showfeedback");
            logos[current].classList.toggle("activelogo");
        }
    }


    rightButton.addEventListener("click", slideRight);
    leftButton.addEventListener("click", slideLeft);
    

    logos[0].addEventListener("click", function () {
        if (current !== 0) {
            slides[current].classList.toggle("showfeedback");
            logos[current].classList.toggle("activelogo");

            current = 0;

            slides[current].classList.toggle("showfeedback");
            logos[current].classList.toggle("activelogo");
        }
    })

    logos[1].addEventListener("click", function () {
        if (current !== 1) {
            slides[current].classList.toggle("showfeedback");
            logos[current].classList.toggle("activelogo");

            current = 1;

            slides[current].classList.toggle("showfeedback");
            logos[current].classList.toggle("activelogo");
        }
    })

    logos[2].addEventListener("click", function () {
        if (current !== 2) {
            slides[current].classList.toggle("showfeedback");
            logos[current].classList.toggle("activelogo");

            current = 2;

            slides[current].classList.toggle("showfeedback");
            logos[current].classList.toggle("activelogo");
        }
    })

    logos[3].addEventListener("click", function () {
        if (current !== 3) {
            slides[current].classList.toggle("showfeedback");
            logos[current].classList.toggle("activelogo");

            current = 3;

            slides[current].classList.toggle("showfeedback");
            logos[current].classList.toggle("activelogo");
        }
    })

  

   
    
}
