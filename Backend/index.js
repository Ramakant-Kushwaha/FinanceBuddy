const app = require("./app");
require("dotenv").config();

const port = process.env.PORT || 3000; // to get the port

app.listen(port, () => {
  console.log(
    `App running on port ${port}.... click to open http://localhost:${port}/`
  );
});
