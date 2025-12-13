import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import Admin from "./models/Admin.js";

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.ATLAS_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

//Create admin
async function createAdmin() {
  try {
    const hashedPassword = await bcrypt.hash("YourSecurePassword123!", 10);

    const admin = new Admin({
      email: "admin@example.com",
      password: hashedPassword,
    });

    await admin.save();
    console.log("Admin created successfully!");
  } catch (error) {
    console.error("Error creating admin:", error);
  } finally {
    mongoose.connection.close(); // close connection after script finishes
  }
}

createAdmin();
