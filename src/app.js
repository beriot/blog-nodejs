const express = require("express");
const app = express();
const port = 3000;

require("./loaders")(app);

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`);
});
