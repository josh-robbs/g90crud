const app = require("./app");
const port = parseInt(process.env.PORT || 8080);

app.listen(console.log(`If you would like a taco, I would look on port ${port}`))
