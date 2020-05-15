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

const pp = document.querySelector("#proposal");

pp.addEventListener("click", function() {
  window.open('https://docs.google.com/document/d/1kZtVZDlHRaEcS88qsbBB3os38Ny2ixVGqvniAc-yhQo/edit?usp=sharing');
})

const wf = document.querySelector("#wireframe");

wf.addEventListener("click", function() {
  window.open('https://drive.google.com/open?id=1Ap8nXUtbtuCF8zYYziwYkYLZqAZjWmFc');
})

const ux = document.querySelector("#uxReport");

ux.addEventListener("click", function() {
  window.open('https://docs.google.com/document/d/1PP1BZv5bftVCiJnKqNLbcx_hVOJqIh5IwqV6do03bsw/edit');
})

