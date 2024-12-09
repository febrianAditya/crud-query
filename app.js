const express = require("express")
const app = express()
const PORT = 3000
const routeTodos = require("./routes")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routeTodos)

app.listen(PORT, () => {
    console.log("AKU RUNNING DI PORT " +  PORT);  
})