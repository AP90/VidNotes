// const express = require("express");
// const path = require("path");
// const port = process.env.PORT || 8080;
// const app = express();

// app.use(express.static(__dirname));

// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "public/index.html"));
// });

// app.listen(port);
// console.log("server started");



const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 8080;

// looks into public folder server all assets in dir
app.use(express.static(publicPath));

// if request url is not found
app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
    console.log("server is up");
});