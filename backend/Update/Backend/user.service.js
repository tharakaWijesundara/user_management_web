const pool = require("../../config/database");

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into aandtlabs (idNum, firstName, lastName, address1, address2, styles)
            values(?,?,?,?,?,?)`,
            [
                data.idNum,
                data.firstName,
                data.lastName,
                data.address1,
                data.address2,
                data.styles,
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                } else {
                    return callback(null, results)
                }
            }

        )
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
                data.status
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                } else {
                    return callback(null, results)
                }
            }

        )
    },
    getWorkers: callback => {
        pool.query(
            `select idNum,firstName,lastName,address1,address2,styles from aandtlabs`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results)
            }

        )
    },
    getHeads: callback => {
        pool.query(
            `select keyNum, idNum, firstName,lastName,email,status from headboard`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results)
            }

        )
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
                return callback(null, results)
            }

        )
    },
    getLogger: (data, callback) => {
        pool.query(
            `select keyNo, idNum ,firstName,lastName,email,status from headboard where idNum=? AND password =?`,
            [data.idNum, data.password],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results)
            }

        )
    },

    getUserByUserID: (id, callback) => {
        pool.query(
            `select id,firstName,lastName,gender,email,number from registration where id=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results[0])
            }

        )
    },
    getWorkerStylesByID: (id, callback) => {
        pool.query(
            `select styles from aandtlabs where idNum=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results[0])
            }

        )
    },
    changeState: (data, callback) => {
        pool.query(
            `update headboard set status=? where idNum=?`,
            [
                data.status,
                data.idNum
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error, null);
                }
                return callback(null, results);
            }
        )
    },
    updateUser: (data, callback) => {
        pool.query(
            `update registration set firstName=?,lastName=?,gender=?,email=?,password=?,number=? where id=?`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error, null);
                }
                return callback(null, results);
            }
        )
    },
    deleteWorker: (data, callback) => {
        pool.query(
            `delete from aandtlabs where idNum=?`,
            [data],
            (error, results, fileds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results)
            }
        )
    },
    checkAndSignUp: (data, callback) => {
        pool.query(
            `select * from headboard where idNum=? OR email=?`,
            [data.idNum, data.email],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results)
            }

        )
    },
    createStyle: (data, callback) => {
        pool.query(
            `insert into styles (name, stich_count, error_margin, prop3, prop4, prop5)
            values(?,?,?,?,?,?)`,
            [
                data.name,
                data.stich_count,
                data.error_margin,
                data.prop3,
                data.prop4,
                data.prop5,
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                } else {
                    return callback(null, results)
                }
            }

        )
    },
    getStyles: callback => {
        pool.query(
            `select name, stich_count, error_margin, prop3, prop4, prop5 from styles`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results)
            }
        )
    },
    deleteStyle: (data, callback) => {
        pool.query(
            `delete from styles where name=?`,
            [data],
            (error, results, fileds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results)
            }
        )
    },
    getStylesNames: callback => {
        pool.query(
            `select name from styles`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results)
            }

        )
    },
}

