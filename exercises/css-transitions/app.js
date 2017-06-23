

document.querySelector(".box").addEventListener("click", function() {
  this.classList.add("box-radius");
    this.classList.add("box-trans");
});

document.querySelector(".box").addEventListener("mouseover", function() {
    document.querySelector("body").classList.add("bg");
});


document.querySelector(".box").addEventListener("mouseout", function() {
   document.querySelector("body").classList.remove("bg"); 
});

document.querySelector(".box").addEventListener("mouseover", function() {
    document.querySelector(".inner-box").style.opacity = "1";
});