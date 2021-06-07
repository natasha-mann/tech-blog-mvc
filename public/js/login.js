const fetchData = async (url, options) => {
  try {
    return await fetch(url, options);
    // console.log(response);
    // const data = await response.json();
    // console.log(data);
    // return data;
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

  if (response.ok) {
    window.location.href = "/dashboard";
  }
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
