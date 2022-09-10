//DEPENDENCIES
const events = require("express").Router();
const db = require("../models");
const { Event } = db;
const { Op } = require("sequelize");

//ROUTES

//SHOW all events
events.get("/", async (req, res) => {
  try {
    const foundEvents = await Event.findAll({
      order: [["event_start", "ASC"]],
      where: {
        event_name: {
          [Op.like]: `%${req.query.event_name ? req.query.event_name : ""}%`,
        },
      },
    });
    res.status(200).json(foundEvents);
  } catch (error) {
    res.status(500).json(error);
  }
});

//SHOW specific event
events.get("/:id", async (req, res) => {
  try {
    const foundEvent = await Event.findOne({
      where: { event_id: req.params.id },
    });
    res.status(200).json(foundEvent);
  } catch (error) {
    res.status(500).json(error);
  }
});

//CREATE an event
events.post("/", async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(200).json({
      message: "Successfully added a new event",
      data: newEvent,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE an event
events.put("/:id", async (req, res) => {
  try {
    const selectedEvent = await Event.update(req.body, {
      where: {
        event_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Succesfully updated event by the event of ${selectedEvent}`,
      data: selectedEvent,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE event
events.delete("/:id", async (req, res) => {
  try {
    const deletedEvent = await Event.destroy({
      where: {
        event_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully deleted the event by the id of ${deletedEvent}`,
      data: deletedEvent,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//EXPORT
module.exports = events;
