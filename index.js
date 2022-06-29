const express = require("express");
const app = express();

let ejs = require("ejs");
let pdf = require("html-pdf");
const path = require("path")


app.set("views", path.join(__dirname));

app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.send("ok")
})

app.get('/pdf', async (req, res) => {
    try {
        // const employee = {
        //     employeeName: "vikas swain",
        //     degisnation: "S.E garde2",
        // }
    
       // console.log(employee);
        ejs.renderFile(path.join("test.ejs") , (err, data) => {

            if (err) {
                res.send(err);
                console.log(err);
            } else {
                const options = {
                    "height": "11.25in",
                    "width": "8.5in",
                    "header": {
                        "height": "2mm"
                    },
                };
                // console.log(data);
             pdf.create(data, options).toFile('./html1.pdf', function (err, data) {
                console.log(err);
                  //  console.log("success !");
                    res.send("ok")
                    const filePath = __dirname + "/html1" +".pdf";
                    console.log(filePath)
                })
            }

        })
    } catch (error) {
        console.log(error)
        res.status(200).json({
            status:500,
            message:"flag2"
        })
    }
})



app.listen(3000, () => {
console.log(`ur port is connected at localhost 3000`)
})
