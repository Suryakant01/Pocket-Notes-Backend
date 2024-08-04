import express from "express";
import bodyParser from 'body-parser';
import cors from "cors";
// import bodyParser from 'body-parser';
import groupRoutes from './routes/groups.routes.js';
import messageRoutes from './routes/groupMessages.routes.js';
import errorHandler from "./middlewares/errorHandler.js"

const app = express();

app.use(cors ({
    origin: 'http://localhost:3000',
    credentials : true,
}))

// This will allow requests from any origin
// app.use(cors());

app.use(bodyParser.json());

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(express.static("public"));
// app.use(cookieParser())


//Routes Import
// import userRouter from "./routes/user.routes.js"


//Routes Declaration
// app.use("/api/v1/users", userRouter)
app.get('/health', (req, res) => {
    const dbState = mongoose.connection.readyState;
    const dbHealth = dbState === 1 ? 'up' : 'down'; // 1 means connected

    res.status(200).json({
        status: 'OK',
    });
});
app.use('/api/groups', groupRoutes);
app.use('/api/groups', messageRoutes);
app.use(errorHandler);

export {app};