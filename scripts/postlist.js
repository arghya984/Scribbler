const post1=document.getElementById("post1");
const post2=document.getElementById("post2");
const post3=document.getElementById("post3");
const post4=document.getElementById("post4");
const post5=document.getElementById("post5");
const deletepost1=document.getElementById("trash1");
const deletepost2=document.getElementById("trash2");
const deletepost3=document.getElementById("trash3");
const deletepost4=document.getElementById("trash4");
const deletepost5=document.getElementById("trash5");
const deleteModal1=document.getElementById("delete-post-modal-1");
const deleteModal2=document.getElementById("delete-post-modal-2");
const deleteModal3=document.getElementById("delete-post-modal-3");
const deleteModal4=document.getElementById("delete-post-modal-4");
const deleteModal5=document.getElementById("delete-post-modal-5");
const yes1=document.getElementById("yes1");
const yes2=document.getElementById("yes2");
const yes3=document.getElementById("yes3");
const yes4=document.getElementById("yes4");
const yes5=document.getElementById("yes5");
const no1=document.getElementById("no1");
const no2=document.getElementById("no2");
const no3=document.getElementById("no3");
const no4=document.getElementById("no4");
const no5=document.getElementById("no5");

deletepost1.addEventListener("click", ()=>{
    deleteModal1.style.display = "block";
});

deletepost2.addEventListener("click", ()=>{
    deleteModal2.style.display = "block";
});

deletepost3.addEventListener("click", ()=>{
    deleteModal3.style.display = "block";
});

deletepost4.addEventListener("click", ()=>{
    deleteModal4.style.display = "block";
});

deletepost5.addEventListener("click", ()=>{
    deleteModal5.style.display = "block";
});
yes1.addEventListener("click", ()=>{
    deleteModal1.style.display="none";
    post1.style.display="none";
});
no1.addEventListener("click", ()=>{
    deleteModal1.style.display="none";
});

yes2.addEventListener("click", ()=>{
    deleteModal2.style.display="none";
    post2.style.display="none";
});
no2.addEventListener("click", ()=>{
    deleteModal2.style.display="none";
});

yes3.addEventListener("click", ()=>{
    deleteModal3.style.display="none";
    post3.style.display="none";
});
no3.addEventListener("click", ()=>{
    deleteModal3.style.display="none";
});

yes4.addEventListener("click", ()=>{
    deleteModal4.style.display="none";
    post4.style.display="none";
});
no4.addEventListener("click", ()=>{
    deleteModal4.style.display="none";
});

yes5.addEventListener("click", ()=>{
    deleteModal5.style.display="none";
    post5.style.display="none";
});
no5.addEventListener("click", ()=>{
    deleteModal5.style.display="none";
});