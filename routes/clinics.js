const express = require("express");
const router = express.Router();

const {
  createClinic,
  getAllClinic,
  getSingleClinic,
  updateClinic,
  deleteClinic,
} = require("../controllers/clinic");

router.post("/", createClinic);
router.get("/", getAllClinic);
router.get("/:id", getSingleClinic);
router.put("/:id", updateClinic);
router.delete("/:id", deleteClinic);

module.exports = router;
