document.addEventListener('DOMContentLoaded', function() {
    const editIcon = document.querySelector('#editIcon');
    const title = document.getElementById('post-title');
    const content = document.getElementById('post-content');
    
    editIcon.addEventListener('click', function() {
      title.contentEditable = !title.contentEditable;
      content.contentEditable = !content.contentEditable;
      
      if (title.contentEditable === 'true') {
        title.classList.add('editing');
        content.classList.add('editing');
      } else {
        title.classList.remove('editing');
        content.classList.remove('editing');
      }
    });
  });

//code for like button and like count
const likebutton=document.getElementById("likebutton");
const likecount=document.getElementById('likecount');
likebutton.addEventListener("click", ()=>{
    likecount.innerText="1 person likes this!";
    likebutton.className="fa-solid fa-thumbs-up";
});


//code for comments
function submitComment() {
  var commentInput = document.getElementById("commentInput").value;
  var commentsList = document.getElementById("commentsList");
  
  // Create a new list item for the comment
  var listItem = document.createElement("li");
  listItem.textContent = commentInput;
  
  // Add the new comment to the top of the list
  commentsList.insertBefore(listItem, commentsList.firstChild);
  
  // Clear the comment input field after submitting
  document.getElementById("commentInput").value = "";
}