

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon 
function burgerShowHide() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  */

//nav function
const pw = document.querySelector("#page-wrapper");
const tt = document.querySelector(".toggleTrigger");

tt.addEventListener("click", toggleNav);

function toggleNav() {
  if (pw.classList.contains("show-nav")) {
    pw.classList.remove("show-nav");
  } else {
    pw.classList.add("show-nav");
  }
}











