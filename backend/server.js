import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cors from "cors";

import reportRoutes from "./ReportRoute.js";
import Admin from "./models/Admin.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

mongoose
  .connect(process.env.ATLAS_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

//cors
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//a simple built in middleware to parse incoming json bodies(mostly made by post requests)
app.use(express.json());

//serve uploads folder
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hello world, my urban mind server is working");
});

app.use("/report", reportRoutes);

//admin login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //check email
  const admin = await Admin.findOne({ email });

  if (!admin) {
    return res.status(401).json({ message: "Invalid Login credentials" });
  }

  //does password match
  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid login credentials" });
  }

  //jwt token genaration

  const token = jwt.sign(
    { admin: admin._id },
    process.env.URBANMIND_SECRET_TOKEN,
    { expiresIn: "1day" }
  );

  res.json({ token });
});

//Token authentication

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res.status(401).json({
      message: "Token sent is null",
    });

  jwt.verify(token, process.env.URBANMIND_SECRET_TOKEN, (err, user) => {
    if (err)
      return res.status(403).json({
        message: "Token sent is Invalid",
      });

    req.user = user;
    next();
  });
}

app.listen(PORT, () => {
  console.log("my urbanmind server is running");
});
