const handleDelete = async (event) => {
  event.preventDefault();

  const id = event.currentTarget.id;

  const options = {
    method: "DELETE",
    redirect: "follow",
  };

  const response = await fetch(`/api/posts/${id}`, options);

  if (response.status !== 200) {
    console.log("FAILED TO DELETE");
  } else {
    window.location.replace("/dashboard");
  }
};

$('[name="delete-btn"]').click(handleDelete);
