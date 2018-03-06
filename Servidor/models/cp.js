var mysql = require('mysql')

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'practica1'
});

var cpModel = {};

cpModel.consultaCodigoPostal = function(cp, restKey, callback) {
    if (connection) {
        var keyExists = "SELECT * FROM soapkey WHERE clave = '" + restKey + "'";
        connection.query(keyExists, function (err, key) {
            if (err) {
                throw err;      
            } else {
                if (key.length == 0) {
                    callback("La RestKey es inválida.", false)
                } else {
                    var sql = "SELECT * FROM codigoPostal WHERE codigo = " + cp;
                    connection.query(sql, function (err, key) {
                        if (err) {
                            throw err;
                        } else {
                            if (key.length == 0) {
                                callback("No existe el código postal en nuestra base de datos.", false)
                            } else {
                                callback(null, {"existe": true, "datos": key})
                            }
                        }
                    })
                }
            }
        });
    }
}

module.exports = cpModel;
