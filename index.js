// https://www.30secondsofcode.org/js/s/hash-node
const crypto = require("crypto");

const hashNode = (val) =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve(crypto.createHash("sha256").update(val).digest("hex")),
      0
    )
  );

hashNode("Hello CircleCI!").then((hash) => console.log(hash));
hashNode("Welcome CI/CD.").then((hash) => console.log(hash));
hashNode("test eslint pre-commit?").then((hash) => console.log(hash));
hashNode("test eslint pre-commit?").then((hash) => console.log(hash));
