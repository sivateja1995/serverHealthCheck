require("dotenv").config();
require("./monogoCOnnections/mongoConnection");

const PORT = process.env.PORT;
const app = require("./app");

app.listen(PORT, () => {
  console.log(`port is up on ${PORT}`);
});
