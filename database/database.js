var mysql = require('mysql');

module.exports = {
     connection : mysql.createConnection({
      host     : 'localhost',
      database: 'onlineCV',
      user     : 'root',
      password : 'valRoot_40@'
    })
}
       
   
    
   // connection.connect();
    
    // connection.query('SELECT * from experience', function(err, rows, fields) {
    //   if (err) throw err;
    //   console.log(rows);
    // });
    
    //connection.end();

 