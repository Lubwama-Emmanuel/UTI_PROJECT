const signUp = async (
  names,
  email,
  gender,
  age,
  address,
  summary,
  password,
  passwordConfirm
) => {
  console.log(
    names,
    gender,
    email,
    age,
    address,
    summary,
    password,
    passwordConfirm
  );
  const data = {
    names,
    gender,
    email,
    age,
    address,
    summary,
    password,
    passwordConfirm,
  };
  await fetch("http://127.0.0.1:8080/api/UTI/users/signUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("success", data);
    })
    .catch((error) => {
      console.log("Error", error);
    });
  // try {
  //   const res = await fetch("http://127.0.0.1:8080/api/UTI/users/signUp", {
  //     body: JSON.stringify({
  //       names,
  //       gender,
  //       email,
  //       age,
  //       address,
  //       summary,
  //       password,
  //       passwordConfirm,
  //     }),
  //     method: 'POST',
  //     'content-Type': 'application/json'
  //   });
  //   const response = await res.json();
  //   console.log("Response from Axios", response);
  // } catch (err) {
  //   console.log("Error from Axios", err.response.data);
  // }
};

document.querySelector(".login100-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const names = document.getElementById("names").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;
  const age = document.getElementById("age").value;
  const address = document.getElementById("address").value;
  const summary = document.getElementById("summary").value;
  const password = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("passwordConfirm").value;
  signUp(
    names,
    gender,
    email,
    age,
    address,
    summary,
    password,
    passwordConfirm
  );
});
