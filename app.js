const express = require("express")
const cosrs = require("cors")

const app = express();
const port = 3030

const recipeRouter = require("./recipes.js")
const userRouter = require("./users.js")

app.use("/recipes", recipeRouter)
app.use("/users", userRouter)




app.listen(port, ()=>
   console.log(`Server is listening at port ${port}`) 
)