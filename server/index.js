import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
dotenv.config({});

const app = express();
connectDB();

const PORT = process.env.PORT || 3000;
// default middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

 
// apis
// app.use("/api/v1/media", mediaRoute);
app.use("/api/v1/user", userRoute);
// app.use("/api/v1/course", courseRoute);
// app.use("/api/v1/purchase", purchaseRoute);
// app.use("/api/v1/progress", courseProgressRoute);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
