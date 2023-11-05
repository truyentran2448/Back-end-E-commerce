const app = require("./src/app.js");

const PORT = "3077";
const server = app.listen(PORT, function () {
  console.log("You server is running on PORT:", PORT);
});

process.on("SIGINT", () => {
  server.close(() => console.log("Server is close"));
});
