const userModel = require("../Model/FormSchema")
const express = require("express")

const controllers = {
    user: (req,res) => {
        const { name, phone, email, message } = req.body
        if (!name || !phone || !email || !message) {
            res.json({
                message: "required field are missing !"
            })
        }

        const objToSend = {
            ...req.body
        }
        userModel.create(objToSend)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);

            })

        res.json({
            name: "okay boss",
        })
    }
}
module.exports = controllers