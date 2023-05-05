const {
    Router
} = require("express");
const userController = require("../controllers/UserController");
const router = Router();

router.get("/", userController.userList);
router.post("/add_user",userController.insertUser);
router.post("/update_user",userController.updateUser);
router.post("/delete_user",userController.deleteUser);

module.exports = router