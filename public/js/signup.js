const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const signup = async (userDetails) => {
  const response = await fetchData("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  });
  return response;
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
  await signup(userDetails);
};

$("#sign-up-btn").click(onClick);
