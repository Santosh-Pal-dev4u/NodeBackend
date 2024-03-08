import { Router } from "express";
import { registerUser } from "../controllers/user_controller.js";
import { upload } from "../middlewares/multer_middleware.js";

const router = Router();

router.post("/register", upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "cover", maxCount: 1 }
]), registerUser);

// router.route("/register").post(registerUser)

export default router;
