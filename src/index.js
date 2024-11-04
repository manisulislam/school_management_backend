import dotenv from "dotenv"
import {app} from "./app.js"
import connectDb from "./db/index.js"
dotenv.config({
    path: "./env"
})

const port = process.env.PORT || 5000

connectDb()
.then(
    app.listen(port, ()=>{
        console.log(`server is ready for port ${port}`)
    })
).catch((error)=>{
    console.log("server is not ready.!!! connection is failed")
    throw new Error("server connection is failed")
})
