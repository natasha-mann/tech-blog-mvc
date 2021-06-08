const handleComment = async (event) => {
  event.preventDefault();

  const post_id = event.currentTarget.id;

  const message = $("#commentData").val();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({ message, post_id }),
  };

  const response = await fetch("/api/comments", options);

  if (response.status !== 200) {
    console.error("Failed to add comment");
  } else {
    window.location.replace(`/posts/${post_id}`);
  }
};

$('[name="comment-form"]').submit(handleComment);
