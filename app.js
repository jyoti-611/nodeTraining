const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
const port = 3000;
const userRoutes = require("./server/routes/userRoutes")
const fileRoute = require("./server/routes/FileRoute")

app.use("/user", userRoutes)
app.use("/file", fileRoute)

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});