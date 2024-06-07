import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js"

const router = express.Router();

// router.get("/login", (req, res) => {
//     res.send("Login Route");
// });

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;