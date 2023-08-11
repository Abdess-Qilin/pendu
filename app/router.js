import express from "express";
import mainComtroller from "./controllers/maincontroller.js";

const router = express.Router();

router.get('/',mainComtroller.accueil)
router.get('/niveau/4',mainComtroller.mot4)
router.get('/niveau/5',mainComtroller.mot5)
router.get('/niveau/6',mainComtroller.mot6)


export default router;  