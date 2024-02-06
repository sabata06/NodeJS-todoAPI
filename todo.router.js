"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const router = require("express").Router();
const { response } = require("express");
const Todo = require("./todo.model");

//*LIST
router.get("/", async (req, res) => {
  const data = await Todo.findAndCountAll();
  res.send({
    error: false,
    result: data,
  });
});

//*CREATE
router.post("/", async (req, res) => {
  const data = await Todo.create(req.body);
  res.send({
    error: false,
    message: "Created",
    body: req.body,
    result: data,
  });
});

router.get("/:id", async (req, res) => {
  const data = await Todo.findByPk(req.params.id);
  res.send({
    error: false,
    result: data,
  });
});

router.put('/:id', async ()=> {
  const data = await Todo.update(req.body, );
})

module.exports = router;
