import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

const allowedOrigins = [
  "https://prescripto-admin-gamma-sand.vercel.app",
  "https://prescripto-admin-ganesh-s-projects-45f27164.vercel.app",
  "https://prescripto-admin-git-main-ganesh-s-projects-45f27164.vercel.app",
  "https://prescripto-admin-e555w7vmn-ganesh-s-projects-45f27164.vercel.app",

  "https://prescripto-frontend-blond.vercel.app",
  "https://prescripto-frontend-ganesh-s-projects-45f27164.vercel.app",
  "https://prescripto-frontend-git-main-ganesh-s-projects-45f27164.vercel.app",
  "https://prescripto-frontend-2qoqx3yam-ganesh-s-projects-45f27164.vercel.app",
];
//app config
const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // allow requests with no origin (like Postman or curl)
//       if (!origin) return callback(null, true);

//       if (allowedOrigins.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     credentials: true, // allow cookies
//   })
// );

app.use(cors({ origin: "*", credentials: true }));

//middlewares
app.use(express.json());

//api endpoints
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

//localhost:4000/api/admin/add-doctor
app.get("/api/doctor/list", (req, res) => {
  res.json({ message: "Success" });
});

app.listen(port, () => {
  console.log("Server started", port);
});

app.get("/", (req, res) => {
  return res.send("Backend is running!");
});
