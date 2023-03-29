const express = require("express")
const multer = require("multer")
const path = require('path')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname)
    }
})
var upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        var filetypes = /jpeg|jpg|png|webp|mp4/;
        var mimetype = filetypes.test(file.mimetype);
        var extname = filetypes.test(path.extname(
            file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: File upload only supports the "
            + "following filetypes - " + filetypes);
    }
})

module.exports = upload