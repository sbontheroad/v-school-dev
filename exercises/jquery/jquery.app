
//plain JS
// document.getElementById("output").innerHTML = "new text";
// document.querySelector("#output").innerHTML = "more new text";

// document.getElementById("submit").addEventListener("click", () => {
//   alert("hello");
//   document.querySelector("#submit").style.backgroundColor = "purple";
// });


//jQuery way to change text
// $("#output").html("the new jquery way");


// $("#submit").on("click", () => {
//   alert("hello 2");
//   $("#submit").css("background-color", "pink");
//   $("#submit").toggleClass("big");
// });

//add and remove classes
// let counter = 0;

// $("#submit").on("click", () => {
//   if(counter === 0) {
//     $("#submit").addClass("big");
//     $("#submit").removeClass("small");
//     counter++;
//   } else {
//     $("#submit").removeClass("big");
//     $("#submit").addClass("small");
//     counter = 0;
//   }
// });

// $("#submit").on("click", () => {
//   let inputValue = $("#input").val();
//   alert(inputValue);
//   $("#input").val("");
// });

$("#shape").on("mouseleave", () => {
  $("#shape").removeClass("circle");
});

$("#shape").on("click", () => {
  $("#shape").addClass("circle");
});