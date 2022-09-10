//DEPENDENCIES
const stages = require("express").Router();
const db = require("../models");
const { Stage } = db;
const { Op } = require("sequelize");

//ROUTES

//SHOW all stages
stages.get("/", async (req, res) => {
  try {
    const foundStages = await Stage.findAll({
      order: [["stage_id", "ASC"]],
      where: {
        stage_name: {
          [Op.like]: `%${req.query.stage_name ? req.query.stage_name : ""}%`,
        },
      },
    });
    res.status(200).json(foundStages);
  } catch (error) {
    res.status(500).json(error);
  }
});

//SHOW specific stage
stages.get("/:id", async (req, res) => {
  try {
    const foundStage = await Stage.findOne({
      where: { stage_id: req.params.id },
    });
    res.status(200).json(foundStage);
  } catch (error) {
    res.status(500).json(error);
  }
});

//CREATE a stage
stages.post("/", async (req, res) => {
  try {
    const newStage = await Stage.create(req.body);
    res.status(200).json({
      message: "Successfully added a new stage",
      data: newStage,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE a stage
stages.put("/:id", async (req, res) => {
  try {
    const selectedStage = await Stage.update(req.body, {
      where: {
        stage_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Succesfully updated stage by the stage_id of ${selectedStage}`,
      data: selectedStage,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE stage
stages.delete("/:id", async (req, res) => {
  try {
    const deletedStage = await Stage.destroy({
      where: {
        stage_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully deleted the stage by the id of ${deletedStage}`,
      data: deletedStage,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//EXPORT
module.exports = stages;
