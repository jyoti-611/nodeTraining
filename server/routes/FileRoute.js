const {
    Router
} = require("express");
const path = require('path');
const fileController = require("../controllers/fileController");
const router = Router();
const multer = require("multer");

var storage = multer.diskStorage({
    destination: "uploads/",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

const fileSizeLimitErrorHandler = (err, req, res, next) => {
    if (err) {
        res.send("File size can not be more then 10 MB")
    } else {
        next()
    }
}

var upload = multer({
    storage: storage, limits: { fileSize: 10000 }, fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    }
})
var uploadFiles = multer({
    storage: storage, limits: { files: 5 }, fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    }
})
router.post("/upload_files", uploadFiles.array("files"), fileController.uploadFiles);
router.post("/profile", upload.single("image"), fileSizeLimitErrorHandler, fileController.profile);

module.exports = router