import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

import reportRoutes from "./ReportRoute.js";

//login jwt testing
const posts = [
  {
    adminEmail: "theeviralpulse@gmail.com",
    title: "post",
  },
  {
    adminEmail: "theeviralpulse254@gmail.com",
    title: "post2",
  },
];

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

mongoose
  .connect(process.env.ATLAS_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

//a simple built in middleware to parse incoming json bodies(mostly made by post requests)
app.use(express.json());

//serve uploads folder
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hello world, my urban mind server is working");
});

app.use("/report", reportRoutes);

//testing post
app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.adminEmail === req.user.email));
});

//admin login
app.post("/admin-login", (req, res) => {
  //authenticate user

  const adminEmail = req.body.adminEmail;
  const user = { email: adminEmail };

  const accessToken = jwt.sign(user, process.env.URBANMIND_SECRET_TOKEN);
  res.json({ accessToken: accessToken });
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
