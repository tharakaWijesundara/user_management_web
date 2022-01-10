const {
  create, //
  getWorkers, //
  updateStyle, //
  deleteWorker, //
  getHeads, //
  getHeadsWithoutLogger, //
  changeState, //
  checkAndSignUp, //
  createHead, //
  getLogger, //
  getStateByUserID, //
  createStyle, //
  getStyles, //
  deleteStyle, //
  getStylesNames, //
  getWorkerStylesByID, //
  incrementStyle, //
  getIncrementedStyles,//
  resetIncrementedToZero //
} = require("./user.service");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error",
        });
      }
      return res.status(200).json({
        success: 1,
      });
    });
  },
  getStateByUserID: (req, res) => {
    const idNum = req.params.idNum;
    getStateByUserID(idNum, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getWorkerStylesByID: (req, res) => {
    const idNum = req.params.idNum;
    getWorkerStylesByID(idNum, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getWorkers: (req, res) => {
    getWorkers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getHeads: (req, res) => {
    getHeads((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getHeadsWithoutLogger: (req, res) => {
    const idNum = req.params.idNum;
    getHeadsWithoutLogger(idNum, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateStyle: (req, res) => {
    const styleId = req.query.styleId;
    const StitchCount = req.query.stitchCount;
    updateStyle(
      { styleId: styleId, StitchCount: StitchCount },
      (err, results) => {
        if (err) {
          console.log(err);
          return false;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Failed to update",
          });
        }
        return res.json({
          success: 1,
          message: "Updated successfully",
        });
      }
    );
  },
  changeState: (req, res) => {
    const body = req.body;
    changeState(body, (err, results) => {
      if (err) {
        console.log(err);
        return false;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update",
        });
      }
      return res.json({
        success: 1,
        message: "Updated successfully",
      });
    });
  },
  deleteWorker: (req, res) => {
    const idNum = req.params.idNum;
    deleteWorker(idNum, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        message: "user deleted successfully",
      });
    });
  },
  checkAndSignUp: (req, res) => {
    const body = req.body;
    checkAndSignUp(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Connection Error",
        });
      }
      if (results.length > 0) {
        return res.json({
          success: 1,
          exist: 1,
        });
      } else {
        createHead(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database Connection Error",
            });
          }
          return res.status(200).json({
            success: 1,
          });
        });
      }
    });
  },
  getLogger: (req, res) => {
    const body = req.body;
    getLogger(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Connection Error",
        });
      }
      if (results.length > 0) {
        return res.json({
          success: 1,
          dataExist: 1,
          data: results,
        });
      } else {
        return res.json({
          success: 1,
          dataExist: 0,
          data: results,
        });
      }
    });
  },
  createStyle: (req, res) => {
    const body = req.body;
    createStyle(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error",
        });
      }
      return res.status(200).json({
        success: 1,
      });
    });
  },
  getStyles: (req, res) => {
    getStyles((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  deleteStyle: (req, res) => {
    const name = req.params.name;
    deleteStyle(name, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        message: "user deleted successfully",
      });
    });
  },
  getStylesNames: (req, res) => {
    getStylesNames((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  incrementStyle: (req, res) => {
    const styleId = req.query.styleId;
    const workerId = req.query.workerId;
    incrementStyle({ styleId: styleId, workerId: workerId }, (err, results) => {
      if (err) {
        console.log(err);
        return false;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update",
        });
      }
      return res.json({
        success: 1,
        message: "Updated successfully",
      });
    });
  },
  getIncrementedStyles: (req, res) => {
    const idNum = req.params.idNum;
    getIncrementedStyles(idNum, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  resetIncrementedToZero: (req, res) => {
    const styleId = req.query.styleId;
    const workerId = req.query.workerId;
    resetIncrementedToZero({ styleId: styleId, workerId: workerId }, (err, results) => {
      if (err) {
        console.log(err);
        return false;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update",
        });
      }
      return res.json({
        success: 1,
        message: "Updated successfully",
      });
    });
  },
};
