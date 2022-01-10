const {
  createUser, //
  getWorkers, //
  deleteWorker, //
  updateStyle, //
  getHeads, //
  getHeadsWithoutLogger, //
  changeState, //
  checkAndSignUp, //
  getLogger, //
  createStyle, //
  getStyles, //
  deleteStyle, //
  getStylesNames, //
  getWorkerStylesByID, //
  getStateByUserID, //
  incrementStyle, //
  getIncrementedStyles, //
  resetIncrementedToZero, //
} = require("./user.controller");
const router = require("express").Router();

router.post("/", createUser);
router.post("/createStyle", createStyle);
router.post("/check", checkAndSignUp);
router.post("/status", changeState);
router.get("/workers", getWorkers);
router.get("/getStyles", getStyles);
router.get("/getStylesNames", getStylesNames);
router.get("/heads", getHeads);
router.post("/logger", getLogger);
router.get("/getIncrementedStyle/:idNum", getIncrementedStyles);
router.get("/getStateByUserID/:idNum", getStateByUserID);
router.get("/assignedStyles/:idNum", getWorkerStylesByID);
router.get("/without/:idNum", getHeadsWithoutLogger);
router.put("/", updateStyle);
router.put("/incrementStyle", incrementStyle);
router.put("/resetIncrementedToZero", resetIncrementedToZero);
router.delete("/:idNum", deleteWorker);
router.delete("/styles/:name", deleteStyle);
module.exports = router;
