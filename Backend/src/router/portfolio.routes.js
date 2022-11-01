const express = require("express");
const {
  list,
  detail,
  find,
  insertPortofolio,
  update,
  destroy,
  updateCapacity,
} = require("../controller/portfolio.controller");

const {upload }= require("../middleware/uploadImg");
const {removePortfolio} = require("../middleware/deleteImg");

const router = express.Router();

const jwtAuth = require("../middleware/jwtAuth");
const { isAdmin, isCustomer } = require("../middleware/auth");

router
  .get("/portofolio", list)
  .get("/portofolio/detail/:id_portofolio", detail)
  // .post("/flight/find/:page", find)
  .post("/portofolio/add", upload, insertPortofolio)

  .put("/portofolio/update/:id_portofolio",removePortfolio,upload, update)
  // .put("/flight/capacity", updateCapacity)
  .delete("/portofolio/delete/:id_portofolio", removePortfolio, destroy);

module.exports = router;
