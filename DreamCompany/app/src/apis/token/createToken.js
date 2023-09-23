const jwt = require("jsonwebtoken");

module.exports.createAccessToken = function (user_id) {
  return (accessToken = jwt.sign(
    {
      id: user_id,
    },
    "29djv9alaasdxzxvfbt424346r9949ASD2RGTFA",
    {
      expiresIn: "1h",
      issuer: "cotak",
    }
  ));
};
