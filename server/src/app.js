import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();

app.use(cookieParser());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: false }));

// User routes
app.use("/api/v1/users", userRouter);
app.use(errorHandler);

export default app;
