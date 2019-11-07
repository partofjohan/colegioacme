
  console.log("holitica");
  var connection = require('./db_connection');
  connection.connect(function(error) {
    if (error) throw console.log(error);
    console.log("Conectado!");
  });
  console.log("holaaaa");


