const logIn = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:8080/api/UTI/users/logIn",
      data: {
        email,
        password,
      },
    });
    if (res.data.status === "success") {
      alert("You logged in!");
      window.setTimeout(() => {
        location.assign("dashboard");
      }, 1000);
    }
    console.log("Response from Axios ", res);
    alert(email, password);
  } catch (err) {
    alert(err.response.data.message);
    console.log("An Error from Axios ", err);
  }
};
document.querySelector(".login100-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  logIn(email, password);
});
