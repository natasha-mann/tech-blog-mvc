const signup = async (userDetails) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(userDetails),
  };

  const response = await fetch("/auth/signup", options);

  if (response.status !== 200) {
    console.error("Signup unsuccessful");
  } else {
    window.location.href = "/dashboard";
  }
};

const onClick = async (event) => {
  event.preventDefault();
  const userDetails = {
    first_name: $("#firstName").val(),
    last_name: $("#lastName").val(),
    email: $("#email").val(),
    username: $("#username").val(),
    password: $("#password").val(),
  };
  const response = await signup(userDetails);
};

$("#sign-up-form").submit(onClick);
