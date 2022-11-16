const express = require("express");

const app = express();

// Register view engine
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home", isSubroute: false });
});

app.get("/posts", (req, res) => {
  res.render("posts", { title: "Our Posts", isSubroute: false });
});

app.get("/posts/:id", (req, res) => {
  if (req.params.id === "1") {
    res.redirect("/posts");
  } else {
    res.render("posts", { title: `Our Posts`, isSubroute: true });
  }
});

app.get("/post/:id", (req, res) => {
  res.render("postDetail", { title: `Post Detail Page`, isSubroute: true });
});

app.get("/about", (req, res) => {
  res.render("about", { title: `About Me`, isSubroute: false });
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard/index", { title: `Dashboard`, isSubroute: false });
});

app.get("/dashboard/edit", (req, res) => {
  res.render("dashboard/edit", {
    title: `Create, edit posts`,
    isSubroute: true,
  });
});

app.get("/dashboard/settings", (req, res) => {
  res.render("dashboard/settings", {
    title: `Account Settings`,
    isSubroute: true,
  });
});

// Auth Pages
app.get("/login", (req, res) => {
  res.render("auth/login", {
    title: "Login to your account",
    isSubroute: false,
  });
});

app.get("/signup", (req, res) => {
  res.render("auth/signup", { title: "Create an account", isSubroute: false });
});

// 404 Page
app.use((req, res) => {
  res.status(400).send("Error 404 - Page not found");
});

// Listen to port 5000
app.listen(5000, () => {
  console.log("Server running");
});
