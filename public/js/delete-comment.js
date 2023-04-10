//-------------Adding a Comment to a Post:
document.addEventListener("DOMContentLoaded", () => {
  const deleteButtons = document.querySelectorAll(".delete-comment");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      const commentId = button.getAttribute("data-comment-id");
      try {
        const response = await fetch(`/api/comments/${commentId}`, {
          method: "DELETE",
        });
        if (response.ok) {
          location.reload();
        } else {
          alert("Stop! You may not delete other's comments!");
        }
      } catch (error) {
        console.error(error);
      }
    });
  });
});