const mongoose = require("mongoose");
const Clinic = require("../models/clinic");

exports.createClinic = (req, res) => {
  console.log(req.body);
  const clinic = new Clinic({
    title: req.body.title,
    code: req.body.code,
    content: req.body.content,
    time: req.body.time,
    createdAt: new Date(),
  });

  return clinic
    .save()
    .then((newClinic) => {
      return res.status(201).json({
        success: true,
        message: "New clinic created successfully",
        clinic: newClinic,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: error.message,
      });
    });
};

exports.getAllClinic = (req, res) => {
  Clinic.find()
    .select("id title code content time createdAt")
    .then((allClinic) => {
      return res.status(200).json({
        success: true,
        message: "A list of all Clinic",
        clinic: allClinic,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: err.message,
      });
    });
};

// get single Clinic
exports.getSingleClinic = async (req, res) => {
  console.log(req.params.id);
  Clinic.findById(req.params.id)
    .then((singleClinic) => {
      res.status(200).json({
        success: true,
        message: `More on ${singleClinic.name}`,
        clinic: singleClinic,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "This Clinic does not exist",
        error: err.message,
      });
    });
};

// update Clinic
exports.updateClinic = (req, res) => {
  const id = req.params.id;
  const updateObject = req.body;
  Clinic.updateOne({ _id: id }, { $set: updateObject })
    .exec()
    .then(() => {
      res.status(200).json({
        success: true,
        message: "Clinic is updated",
        updateClinic: updateObject,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
      });
    });
};

// delete a Clinic
exports.deleteClinic = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Clinic.findByIdAndRemove(id)
    .exec()
    .then(() =>
      res.json({
        success: true,
      })
    )
    .catch((err) =>
      res.status(500).json({
        success: false,
        message: "server said: djt me dell xoa dc.",
      })
    );
};
