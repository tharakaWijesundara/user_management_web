const pool = require("../../config/database");

module.exports = {
  create: (data, callback) => {
    pool.query(
      `insert into workers (idNum, firstName, lastName, address1, address2, styles, styleData)
            values(?,?,?,?,?,?,?)`,
      [
        data.idNum,
        data.firstName,
        data.lastName,
        data.address1,
        data.address2,
        data.styles,
        data.styleData,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        } else {
          return callback(null, results);
        }
      }
    );
  },
  createHead: (data, callback) => {
    pool.query(
      `insert into headboard (firstName, lastName, email, idNum, password, status)
            values(?,?,?,?,?,?)`,
      [
        data.firstName,
        data.lastName,
        data.email,
        data.idNum,
        data.password,
        data.status,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        } else {
          return callback(null, results);
        }
      }
    );
  },
  getWorkers: (callback) => {
    pool.query(
      `select idNum,firstName,lastName,address1,address2,styles from workers`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getHeads: (callback) => {
    pool.query(
      `select keyNum, idNum, firstName,lastName,email,status from headboard`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getHeadsWithoutLogger: (idNum, callback) => {
    pool.query(
      // `select keyNo, idNum ,firstName,lastName,email,status where idNum=?`,
      `select keyNo, idNum ,firstName,lastName,email,status from headboard where idNum !=?`,
      [idNum],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getLogger: (data, callback) => {
    pool.query(
      `select keyNo, idNum ,firstName,lastName,email,status from headboard where idNum=? AND password =?`,
      [data.idNum, data.password],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getStateByUserID: (id, callback) => {
    pool.query(
      `select status from headboard where idNum=?`,
      [id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  getWorkerStylesByID: (id, callback) => {
    pool.query(
      `select styles from workers where idNum=?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  changeState: (data, callback) => {
    pool.query(
      `update headboard set status=? where idNum=?`,
      [data.status, data.idNum],
      (error, results, fields) => {
        if (error) {
          return callback(error, null);
        }
        return callback(null, results);
      }
    );
  },
  updateStyle: (data, callback) => {
    pool.query(
      `update styles set stich_count=? where id=?`,
      [data.StitchCount, data.styleId],
      (error, results, fields) => {
        if (error) {
          return callback(error, null);
        } else {
          return callback(null, "done");
        }
      }
    );
  },
  deleteWorker: (data, callback) => {
    pool.query(
      `delete from workers where idNum=?`,
      [data],
      (error, results, fileds) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  checkAndSignUp: (data, callback) => {
    pool.query(
      `select * from headboard where idNum=? OR email=?`,
      [data.idNum, data.email],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  createStyle: (data, callback) => {
    pool.query(
      `insert into styles (name, id, stich_count, error_margin, prop4, prop5)
            values(?,?,?,?,?,?)`,
      [
        data.name,
        data.id,
        data.stich_count,
        data.error_margin,
        data.prop4,
        data.prop5,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        } else {
          return callback(null, results);
        }
      }
    );
  },
  getStyles: (callback) => {
    pool.query(
      `select name, id, stich_count, error_margin, prop4, prop5 from styles`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  deleteStyle: (data, callback) => {
    pool.query(
      `delete from styles where name=?`,
      [data],
      (error, results, fileds) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getStylesNames: (callback) => {
    pool.query(`select name from styles`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },
  incrementStyle: (data, callback) => {
    pool.query(
      `update workers set styleData = JSON_SET(styleData, '$.${data.styleId}', JSON_EXTRACT(styleData, '$.${data.styleId}') + 1) where idNum=?`,
      [data.workerId],
      (error, results, fields) => {
        if (error) {
          return callback(error, null);
        } else {
          return callback(null, "done");
        }
      }
    );
  },
  getIncrementedStyles: (id,callback) => {
    pool.query(
      `select styleData from workers where idNum=?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  resetIncrementedToZero:(data, callback) => {
    pool.query(
      `update workers set styleData = JSON_SET(styleData, '$.${data.styleId}',0) where idNum=?`,
      [data.workerId],
      (error, results, fields) => {
        if (error) {
          return callback(error, null);
        } else {
          return callback(null, "done");
        }
      }
    );
  },
};
