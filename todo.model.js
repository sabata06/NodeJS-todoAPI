"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

/* ------------------------------------------------------- */
const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize('sqlite:./db.sqlite3')
const sequelize = new Sequelize(
  "sqlite:" + (process.env.SQLITE || "./db.sqlite3")
);

const Todo = sequelize.define("todo", {
  //   id: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false, //default true
  //     unique: true,
  //     field: "custom_column_name",
  //     comment: "Description",
  //     primaryKey: true,
  //     autoIncrement: true,
  //   },
  title: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  description: DataTypes.TEXT,
  priority: {
    // 1 high, 0 normal -1 low
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0, // set default,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

//! sequelize.sync(); onl must run once!! 

sequelize
  .authenticate()
  .then(() => console.log("*DB connected"))
  .catch((err) => console.log("*DB not connected *", err));
/* ------------------------------------------------------- */

module.exports = Todo