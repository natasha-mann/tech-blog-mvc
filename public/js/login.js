const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const login = async (userDetails) => {
  const response = await fetchData("/auth/login", {
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
    email: $("#email").val(),
    password: $("#password").val(),
  };
  await login(userDetails);
};

$("#login-btn").click(onClick);
