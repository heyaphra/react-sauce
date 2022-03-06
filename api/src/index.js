const express = require("express");
const router = require("./router");

(async () => {
  const app = express();
  await router({ app });
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
})();
