exports.logIn = (req, res) => {
  res.status(201).render("logIn", {
    title: "Log Into Your Account",
  });
};

exports.signUp = (req, res) => {
  res.status(201).render("signUp", {
    title: "Sign Up",
  });
};

exports.dashboard = (req, res) => {
  res.status(201).render("dashboard", {
    title: "Dashboard",
  });
};
