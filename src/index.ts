import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import problemsRouter from "./routes/problemRoutes";
import userRouter from "./routes/userRoutes";

dotenv.config({ path: "./config.env" });
const PORT: number = Number(process.env.PORT);

const app = express();
app.use(morgan("dev"));

app.use("/", problemsRouter);
app.use("/", userRouter);
app.use((req: Request, res: Response) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
