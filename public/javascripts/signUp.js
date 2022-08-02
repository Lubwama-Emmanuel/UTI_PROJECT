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
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:8080/api/UTI/users/signUp",
      data: {
        names,
        gender,
        email,
        age,
        address,
        summary,
        password,
        passwordConfirm,
      },
    });
    if (res.data.status === "success") {
      alert("You now logged in!");
      window.setInterval(() => {
        location.assign("dashboard");
      }, 1000);
    }
    console.log("Response from Axios", res);
  } catch (err) {
    console.log("Error from Axios", err);
  }
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
