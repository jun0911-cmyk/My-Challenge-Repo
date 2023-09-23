const express = require("express");
const session = require("express-session");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const Router = require("./router/index/index_route");
const port = process.env.PORT || 8000;
const app = express();
const server = require("http").createServer(app);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("123u8uASDHGFUYH1239dfu98cvjajsduhe3quh"));
app.use(
  session({
    resave: false,
    saveUninitialize: true,
    secret: "123u8uASDHGFUYH1239dfu98cvjajsduhe3quh",
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "cookie",
  })
);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "self");
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization"
  );
  next();
});

app.use("/", Router.mainRouter);
app.use("/user", Router.accountRouter);
app.use("/admin", Router.adminRouter, Router.superAdminRouter);
app.use("/manage", Router.manageRouter);
app.use("/vuln", Router.reportRouter);

app.use(function (req, res, next) {
  var err = new Error("Page Not Found");
  err.status = 404;
  next(err);
});

if (app.get("env") === "development") {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render("../pages/html/error.html");
  });
}

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
});

server.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server start success PORT : ${port}`);
  }
});
