const { createUser, getWorkers, getUserByUserID,
    deleteWorker, updateUser, getHeads,
    getHeadsWithoutLogger, changeState, checkAndSignUp, getLogger,
     createStyle, getStyles, deleteStyle,getStylesNames,getWorkerStylesByID} = require("./user.controller");
const router = require("express").Router();


router.post('/', createUser);
router.post('/createStyle', createStyle);
router.post('/check', checkAndSignUp);
router.post('/status', changeState);
router.get('/workers', getWorkers);
router.get('/getStyles', getStyles);
router.get('/getStylesNames', getStylesNames);
router.get('/heads', getHeads);
router.post('/logger', getLogger);
router.get('/:idNum', getUserByUserID);
router.get('/assignedStyles/:idNum', getWorkerStylesByID);
router.get('/without/:idNum', getHeadsWithoutLogger);
router.patch('/', updateUser);
router.delete('/:idNum', deleteWorker);
router.delete('/styles/:name', deleteStyle);
module.exports = router;