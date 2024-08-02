import dotenv from "dotenv";
import {app} from "./app.js";
import connectDB from "./db/db.js";

dotenv.config({
    path: '../.env'
})


const PORT = 8000 
connectDB()
.then(() => {
    app.listen(PORT , () => {
        console.log(`⚙️ Server is running at port : ${PORT}`);
    })
})
.catch((err) => {
    console.error(`MONGODB connection Failed ${err}`);
})

