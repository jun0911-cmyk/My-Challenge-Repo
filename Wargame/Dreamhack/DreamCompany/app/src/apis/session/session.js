const crypto = require("crypto");
// logical error로 session 정보를 누출 시킬 수 있도록 구상해볼 것
const session = {
  admin: "wa45ra89upjfs8aw34rwf93I4493UJWHTJRJFWE",
  guest: "84983c60f7daadc1cb8698621f802c0d9f9a3c3c295c810748fb048115c186ec",
  manager: "1239asdasd93932WEASDGasdv4234qwegyunbdf4234664",
  fake: "qw9eu8dusf8oyudv8yxze7yr62347789a7we9o7ro837qry78y",
};

// Cryptographic Failures (인코딩 함수가 동작되지 않도록 구상해볼 것)
const encoding = (input) => {
  return crypto.createHash("sha256").update(input).digest("hex");
};

const addSession = (id, pw) => {
  try {
    const isOverlap = overlapSession(id);
    if (isOverlap) return false;
    session[/(guest[0-9]*)\w/g.test(id) === false ? "guest1" : id] =
      encoding(pw);
    return true;
  } catch (e) {
    return false;
  }
};

const overlapSession = (id) => {
  if (session[id] != null) {
    return true;
  }
};

const checkSession = (id, pw) => {
  try {
    const sessionPW = session[id !== null ? id : "fake"];
    if (encoding(pw) === sessionPW) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};

module.exports.add = addSession;
module.exports.check = checkSession;
module.exports.overlap = overlapSession;
