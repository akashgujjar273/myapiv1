const express = require('express');
const fullBodyController=require("./../controller/fullBodyController")
const router=express.Router();

// router.route("/").get(express.static(`${__dirname}/../index.html`))
router.route("/fullbody").get(fullBodyController.getAll)

router.route("/fullbody/:day").get(fullBodyController.getOneDay)

module.exports=router