let express = require("express");
let app = express();


let users = [{
    name1: "John",
    kidneys: [
        {
            healthy: false
        }
    ]
}];

app.use(express.json());

app.get("/", function (req, res) {
    let johkidneys = users[0].kidneys;
    // res.send(johkidneys);
    let numKidney = johkidneys.length;
    // fitlters
    let healthyKid = 0;
    for (let i = 0; i < johkidneys.length; i++) {
        if (johkidneys[i].healthy) {
            healthyKid += 1;
        }
    }
    let numUnKid = numKidney - healthyKid;
    res.json({
        numKidney,
        healthyKid,
        numUnKid,
    })
})

app.post("/", function (req, res) {
    let isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done!"
    })
})

app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        
    });
})

//deleting all the unhealthy kidneys
app.delete("/", function (req, res) {
    let atleastOneUnkid = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        // check if at all there are unhealthy kidneys 
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnkid = true;
        }
    }

    if (atleastOneUnkid) {
        const newKid = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            //  = true;
            if (users[0].kidneys[i].healthy) {
                newKid.push({
                    healthy: true,
                })
            }
        }
        users[0].kidneys = newKid;
        res.json({
            msg: "done"
        });
    }
    else {
        res.status(411).json({
            msg: "no bad kidneys"
        })
    }
    
})

app.listen(2999);