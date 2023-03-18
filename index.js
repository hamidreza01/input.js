module.exports = (quz) => {
  process.stdout.write(new String(quz).toString() + "\n");
  return new Promise((res) => {
    process.stdin.once("data", (data) => {
      res(data.toString());
    });
  });
};
