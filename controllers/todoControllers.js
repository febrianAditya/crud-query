const db = require("../db")

class TodoController {

    static async getAllTodo(req, res) {
        try {
            const queryGet = `
                select * from todos
            `
            const result = await db.query(queryGet)
            res.status(200).json(result.rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async createTodo(req, res) {
        const { title, checked } = req.body

        try {
            const insertDataBase = await db.query(`insert into todos (title, checked) values ($1, $2) returning *`, [title, checked])
            res.status(201).json(insertDataBase)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async editTodo(req, res) {
        const { checked } = req.body
        const { id } = req.params

        try {
            const resultEdit = await db.query(
                `update todos SET checked = $1 where id = $2 returning *`,
                [checked, id]
            );
            res.status(200).json(resultEdit)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async deleteTodo (req, res) {
        const { id } = req.params
        try {
            const resultDbRemove = await db.query(
                `delete from todos where id = $1`,
                [id]
            )
            console.log(resultDbRemove);
            
            res.status(204).json("Data no content")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = TodoController