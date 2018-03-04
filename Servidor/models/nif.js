var mysql = require('mysql')

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'practica1'
});

var nifModel = {};

function validar(dni) {
    var numero
    var letr
    var letra
    var expresion_regular_dni
   
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
   
    if(expresion_regular_dni.test (dni) == true){
       numero = dni.substr(0,dni.length-1);
       letr = dni.substr(dni.length-1,1);
       numero = numero % 23;
       letra='TRWAGMYFPDXBNJZSQVHLCKET';
       letra=letra.substring(numero,numero+1);
      if (letra!=letr.toUpperCase()) {
        return false;
       }else{
        return true;
       }
    }else{
        return false;
     }
  }

nifModel.validarNIF = function(nif, restKey, callback) {
    if (connection) {
        var keyExists = "SELECT * FROM soapkey WHERE clave = '" + restKey + "'";
        connection.query(keyExists, function (err, key) {
            if (err) {
                throw err;      
            } else {
                if (key.length == 0) {
                    callback("RestKey inválida", false)
                } else {
                    var valido = validar(nif);
                    callback(null, valido)
                }
            }
        });
    }
}

module.exports = nifModel;