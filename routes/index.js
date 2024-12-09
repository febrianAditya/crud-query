const route = require("express").Router()
const db = require("../db")
const TodoController = require("../controllers/todoControllers")

route.get("/todo", TodoController.getAllTodo)

route.post("/todo", TodoController.createTodo)

route.put("/todo/:id", TodoController.editTodo)

route.delete("/todo/:id", TodoController.deleteTodo)

module.exports = route // ini harga mati harus di xports