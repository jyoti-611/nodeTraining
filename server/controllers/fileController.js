const Util = require("../Utils");
const util = new Util();
const fs = require('fs')

class FileController {
    static async uploadFiles(req, res) {
        try {
            util.setSuccess(200, "Files uploaded successfully!!", "");
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }
    static async profile(req, res) {
        try {
            let { size, mimetype, filename, path } = req.file
//manual file type test 
            if (!mimetype.includes("image")) {
                util.setError(400, "Select only image");
                fs.unlinkSync(path);
            }
            else {
                util.setSuccess(200, "Profile uploaded successfully!!");
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send("error");
        }
    }
}
module.exports = FileController;