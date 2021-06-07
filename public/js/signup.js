const onSubmit = async (event) => {
  event.preventDefault();

  const first_name = $("#firstName").val();
  const last_name = $("#lastName").val();
  const email = $("#email").val();
  const username = $("#username").val();
  const password = $("#password").val();
  const confirm_password = $("#confirmPassword").val();

  if (
    !first_name ||
    !last_name ||
    !email ||
    !username ||
    !password ||
    !confirm_password
  ) {
    console.log("Please complete all fields!");
    return;
  }

  if (password === confirm_password) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        username,
        password,
      }),
    };

    const response = await fetch("/auth/signup", options);

    if (response.status !== 200) {
      console.error("Signup unsuccessful");
    } else {
      window.location.href = "/login";
    }
  }
};

$("#sign-up-form").submit(onSubmit);
