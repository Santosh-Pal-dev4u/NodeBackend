import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import  userRoute  from './routes/user_routes.js';

const app = express();

app.use(cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN,
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1/user", userRoute);

export { app };


