const login = async (userDetails) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(userDetails),
  };

  const response = await fetch("/auth/login", options);

  if (response.status !== 200) {
    console.error("Failed login");
  } else {
    window.location.replace("/dashboard");
  }
};

const onSubmit = async (event) => {
  event.preventDefault();

  const userDetails = {
    email: $("#email").val(),
    password: $("#password").val(),
  };
  await login(userDetails);
};

$("#login-form").submit(onSubmit);
