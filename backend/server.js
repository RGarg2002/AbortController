const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    let num = 1;
    while (true) {
        console.log(++num);
    }
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});