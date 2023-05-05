const Util = require("../Utils");
const util = new Util();

let userList = [{
    id: 1,
    name: "jack",
    age: 21
}, {
    id: 2,
    name: "jhon",
    age: 32
}]
class UserController {
    static async userList(req, res) {
        try {
            util.setSuccess(200, "Fetched successfully", userList);
            return util.send(res);
        } catch (error) {
            util.setError(404, "Failed to proccess");
            console.log(error)
            return util.send(res);
        }
    }
    static async insertUser(req, res) {
        try {
            let { name, age } = req.body
            userList.push({ id: userList.length + 1, name, age })
            util.setSuccess(200, "Added successfully", userList);
            return util.send(res);
        } catch (error) {
            util.setError(404, "Failed to proccess");
            console.log(error)
            return util.send(res);
        }
    }
    static async updateUser(req, res) {
        try {
            let { name, age, id } = req.body
            let index = userList.findIndex((item) => item.id == id)
            userList[index] = { ...userList[index], name, age }
            util.setSuccess(200, "updated successfully", userList);
            return util.send(res);
        } catch (error) {
            util.setError(404, "Failed to proccess");
            console.log(error)
            return util.send(res);
        }
    }
    static async deleteUser(req, res) {
        try {
            let { id } = req.body
            userList = userList.filter((item) => item.id != id)
            util.setSuccess(200, "Deleted successfully", userList);
            return util.send(res);
        } catch (error) {
            util.setError(404, "Failed to proccess");
            console.log(error)
            return util.send(res);
        }
    }
}
module.exports = UserController;