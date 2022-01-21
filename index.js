module.exports = (quz) => {
  process.stdout.write(new String(quz).toString() + "\n");
  return new Promise((res) => {
    process.stdin.on("data", (data) => {
      res(data.toString());
    });
  });
};
