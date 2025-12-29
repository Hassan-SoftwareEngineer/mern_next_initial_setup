import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}));
app.use(cookieParser());
app.use(express.json({limit : process.env.JSON_LIMIT}));
app.use(express.urlencoded({extended : true, limit : process.env.JSON_LIMIT}));
app.use(express.static("server/public"));

import userRouter from "./routes/user.routes.js";

const userApiPrePath = `${process.env.API_PRE_PATH}/users` ;
app.use(userApiPrePath, userRouter) ;
app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from the backend!' });
});

export {app};

