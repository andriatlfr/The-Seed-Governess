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