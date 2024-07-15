import express from "express";
import { getHistoryByUser, testHistoryController } from "../controller/testHistoryController.js";
import { requireSignIn } from "../middleware/authMiddleware.js";

const router = express.Router();
 // create subject
router.post(
  "/save-history",
  requireSignIn,
   testHistoryController
);


router.get(
  "/gethistorybyuser/:_id",
  requireSignIn,
   getHistoryByUser
);

  export default router;