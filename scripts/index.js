const signupBtn = document.getElementById("signupBtn");
const modal = document.getElementById("signupModal");
const closeBtn = document.getElementsByClassName("btn-close")[0];
const body=document.getElementById("mainbody");

signupBtn.addEventListener("click", () => {
  modal.style.display = "block";
  body.style.filter=" blur(8px)";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  body.style.filter=" blur(0px)";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.filter=" blur(0px)";
  }
});