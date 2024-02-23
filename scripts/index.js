const signupBtn = document.getElementById("signupBtn");
const signinBtn= document.getElementById("signinBtn");
const signupModal = document.getElementById("signupModal");
const signinModal=document.getElementById("signinModal")
const closeSignupModalBtn = document.getElementsByClassName("btn-close")[0];
const closeSigninModalBtn=document.getElementsByClassName("btn-close")[1];
const body=document.getElementById("mainbody");
// const signupModalBtn = document.getElementById("sign-up-btn-modal");


//this addEventListener function is for when the "sign up" button in the header section of the page is clicked. To popup the signup modal and make the background blur
signupBtn.addEventListener("click", ()=> {
 signupModal.style.display = "block";
  body.style.filter=" blur(8px)";
});

//this function opens the signUp modal. i created this to open the signup modal using something other than the button in header section
openSignupModal=function(){
    signupModal.style.display = "block";
  body.style.filter=" blur(8px)";
  signinModal.style.display="none";
}





//this addEventListener funtion is for when the cross button is clicked in the signup modal
closeSignupModalBtn.addEventListener("click", () => {
    signupModal.style.display = "none";
  body.style.filter=" blur(0px)";
});

//this addEventlistener function works when clicked anywhere outside the signup modal, it closes the modal and makes the background normal
window.addEventListener("click", (event) => {
  if (event.target == signupModal) {
    signupModal.style.display = "none";
    body.style.filter=" blur(0px)";
  }
});

//er function is for when the "sign in" button in the header section of the page is clicked. To popup the signin modal and make the background blur
signinBtn.addEventListener("click", () => {
    signinModal.style.display = "block";
     body.style.filter=" blur(8px)";
   });


   //this addEventListener funtion is for when the cross button is clicked in the signin modal
   closeSigninModalBtn.addEventListener("click", () => {
    signinModal.style.display = "none";
  body.style.filter=" blur(0px)";
});

//this addEventlistener function works when clicked anywhere outside the signin modal, it closes the modal and makes the background normal
window.addEventListener("click", (event) => {
    if (event.target == signinModal) {
      signinModal.style.display = "none";
      body.style.filter=" blur(0px)";
    }
  });

