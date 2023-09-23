const jwt = require("jsonwebtoken");

module.exports = async function (req, res, next) {
  new Promise((resolve, reject) => {
    if (req.headers.authorization) {
      let header = {
        authorization: req.headers.authorization.split("Bearer ")[1],
      };
      resolve(header);
    } else {
      next();
    }
  })
    .then((token) => {
      jwt.verify(
        token.accessToken,
        "29djv9alaasdxzxvfbt424346r9949ASD2RGTFA",
        (err, result) => {
          if (err || result === null) {
            res
              .json({
                redirect: "/user/login",
                message: "expired accessToken",
              })
              .status(304);
          } else if (
            result.id === "guest" ||
            (result.id === "manager" && req.path.includes("admin"))
          ) {
            res
              .json({
                message: "you are not admin",
              })
              .status(403); /*타입검사 오류로 해당 조건문을 통과함*/
          } else {
            req.user_id =
              result.id; /*결국에는 result.id에는 [] 형식 또는 {} 형식의 값이 저장되게 됨*/
            next();
          }
        }
      );
    })
    .catch((err) => {
      res
        .json({
          message: err,
        })
        .status(500);
    });
};
