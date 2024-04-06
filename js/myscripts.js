function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  //Intersection Observer Function - looks for intersection of where the content is in relation to the viewport. 
//IntersectionObserver Function
const observer = new IntersectionObserver (entries => {

  entries.forEach ( (entry) => {

      if (entry.isIntersecting) {

          entry.target.classList.add("show");

      } else {

          entry.target.classList.remove("show");

      }
  }

  )

}

);
//establishing variable, name of variable, establish parameters,for each entry in entries, => means shorthand entry
//Target animated elements
const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach(el => observer.observe(el));

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

