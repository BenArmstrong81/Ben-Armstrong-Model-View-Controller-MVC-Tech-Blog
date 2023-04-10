//-------------Deleting a Post:
const deletePostHandler = async (event) => {
  event.preventDefault();
  console.log("Delete post handler called");
  const id = document.querySelector("input[name=id]").value;
  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete post");
  }
};
//-------------Event Listener for Delete Handler:
document
  .querySelector("#delete-post-form")
  .addEventListener("submit", deletePostHandler);