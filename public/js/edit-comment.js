//-------------Editing a Copoment on a Post:
document.querySelectorAll(".edit-comment").forEach((button) => {
  button.addEventListener("click", (event) => {
    const commentId = event.target.dataset.commentId;
    const commentElement = event.target.closest("li");
    const commentText = commentElement.querySelector(".col").innerText.trim();
    const editCommentModal = document.querySelector("#edit-comment-modal");
    editCommentModal.querySelector("#edit-comment-id").value = commentId;
    editCommentModal.querySelector("#edit-comment-body").value = commentText;
  });
});

document
  .querySelector("#edit-comment-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const commentId = event.target.elements.comment_id.value;
    const newCommentText = event.target.elements.edit_comment_body.value;
    //-------------Making a request to update the Comment on the Server:
    try {
      const response = await fetch(`/api/comments/${commentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment_text: newCommentText }),
      });
      if (!response.ok) {
        alert("Stop! You may not delete other's comments!");
        throw new Error(`Failed to update the comment: ${response.statusText}`);
      }
      //-------------After the Server Updates the Comment, Update the Comment in the DOM:
      const commentElement = document
        .querySelector(`[data-comment-id="${commentId}"]`)
        .closest("li");
      commentElement.querySelector(".col").innerText = newCommentText;
    } catch (error) {
      console.error(`Error updating the comment: ${error.message}`);
    }
  });