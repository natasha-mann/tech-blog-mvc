const handleEditComment = async (event) => {
  event.preventDefault();

  const id = event.currentTarget.id;
  const post_id = event.currentTarget.getAttribute("data-post");

  const message = $("#comment-message").val();

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({ message }),
  };

  const response = await fetch(`/api/comments/${id}`, options);

  if (response.status !== 200) {
    console.error("Failed to update comment");
  } else {
    window.location.replace(`/posts/${post_id}`);
  }
};

$('[name="edit-comment-form"]').submit(handleEditComment);
