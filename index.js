// https://www.30secondsofcode.org/js/s/hash-node
const crypto = require('crypto');

const hashNode = val =>
  new Promise(resolve =>
      setTimeout(
      () => resolve(crypto.createHash('sha256').update(val).digest('hex')),
      0
    )
  );

hashNode("hello cicle").then(hash=>console.log(hash));
hashNode("hello ci/cd").then(hash=>console.log(hash));
