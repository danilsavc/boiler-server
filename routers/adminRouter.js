import { Router } from "express";
import adminController from "../controllers/adminController.js";
import Validations from "../validations/validations.js";
import errorValid from "../middleware/ErrorValidationsMeddleware.js";
import authMiddleware from "../middleware/authMiddleware.js";
// import checkrole from "../middleware/checkRoleMiddleware.js";

const router = new Router();

router.post("/registration", Validations.adminValidation, errorValid, adminController.registration);
router.post("/login", Validations.adminValidation, adminController.login);
router.get("/check", authMiddleware, adminController.check);

export default router;
