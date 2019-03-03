var db = require('../database/database.js');

module.exports = {
   getExperiences(req, res) {
            // db.connection.connect();
             db.connection.query('SELECT * from experience', function(err, result) {
                   if (err) {
                     console.log("ERROR querying db", err);
                     throw err;
                   } else {
                    console.log("DB QUERY : ", result);
                    return res.json(result);
                   }
             });
         }
    }
   