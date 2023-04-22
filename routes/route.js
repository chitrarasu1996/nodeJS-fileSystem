const express = require("express");
const fs = require("fs")
const router = express.Router();


router.get("/fs", (req, res) => {
    res.status(200).send({ message: "hello fs" })
});


router.get("/create", (req, res) => {
    try {

        const timeStamp = new Date();

        const fileName = timeStamp.getDate() + "-" + timeStamp.getHours() +"-"+ timeStamp.getMinutes() +"-"+ timeStamp.getSeconds();

        fs.writeFile(`./files/${fileName}.txt`, `${timeStamp}`, () => {
            res.status(200).send({ message: `${fileName} succefully created`, data: timeStamp })


        })
    } catch (er) {
        res.status(401).send({})
    }

})


router.get("/read", (req, res) => {


    const fileName = []

    fs.readdir("./files/", (err, files) => {
        if (err) {
            return res.status(400).send({ message: "unable to process" })
        };

        files.forEach(file => {
            if (file.endsWith(".txt")) {
                fileName.push(file)
            };
        });
        res.status(200).send({ message: "All files are retrived succefully", fileName })
    })
})

module.exports = router