const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = "./routes/index.js";

app.use(routes);








app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });