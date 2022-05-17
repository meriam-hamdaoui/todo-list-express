const listener = (err, port) => {
  err ? console.error(err) : console.log(`go to localhost:${port}`);
};
module.exports = { listener };
