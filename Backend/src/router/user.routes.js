const express = require("express");

const {
  getAllUser,
  updateUser,
  deleteUser,
  //   listUserById,
  //   insert,
  //   updateByEmail,
  getUserId,
  register,
  login,
} = require("../controller/user.controller");
const  {upload} = require("../middleware/uploadImg");
const { removeProfile } = require("../middleware/deleteImg");
// const jwtAuth = require("../middleware/jwtAuth");
// const { isAdmin } = require("../middleware/auth");

const userRouter = express.Router();

userRouter
  // .get('/user/list', jwtAuth, isAdmin, list)
  .get("/user/list", getAllUser)
  .get("/user/list/:id_user", getUserId)

    .put("/user/update/:id_user", removeProfile, upload, updateUser)
	// .put("/user/update/:id_user", updateUser)
  //   .put("/user/update/:email", updateByEmail)
  // .delete('/user/delete/:id_user', destroy)
    .delete("/user/delete/:id_user", removeProfile,  deleteUser)

  .post("/user/register", register)
  .post("/user/login", login);

// .get("/user/:id", getUserId)
// .get("/user", jwtAuth, isAdmin, getAllUser)
// .get("/search/:username", searchUser)
// .get("/user/findemail/:email", searchEmail)
// .post("/register", register)
// .put("/user/update/:id", updateUser)
// .put(
// 	"/user/update/photo/:id",
// 	removeProfilePic,
// 	uploadProfilePic,
// 	updatePhoto
// )
// .put("/update/password", updateUserPassword)
// // .put("/forgot", forgotUserPassword)
// .delete("/user/:id", removeProfilePic, deleteUser)
// .post("/login", login)
// .post("/admin/login", login, jwtAuth, isAdmin);

module.exports = userRouter;
