const express = require("express");
const app = express();
const port = 3000


function calsum(n) {
    let ans = 0;
    for (let i  = 0; i  <= n; i ++) {
        ans = ans + i;       
    }
    return ans;
}
app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
});
// app.get('/', (req, res) => {

//     // console.log(req.headers);
//     res.send("hello world!");
// });
// app.post('/', (req, res) => {

//     console.log(req.headers);

// });
app.get('/', function (req, res) {
    const n = req.query.n;
    const ans = calsum(n);
    res.send(ans);
})