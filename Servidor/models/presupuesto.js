var mysql = require('mysql')

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'practica1'
});

var presupuestoModel = {};

presupuestoModel.generarPresupuesto = function (presupuesto, restKey, callback) {
    if (connection) {
        var keyExists = "SELECT * FROM soapkey WHERE clave = '" + restKey + "'";
        connection.query(keyExists, function (err, key) {
            if (err) {
                throw err;      
            } else {
                if (key.length == 0) {
                    callback("RestKey inválida", false)
                } else {
                    var sqlId = "SELECT AUTO_INCREMENT AS id FROM INFORMATION_SCHEMA.TABLES WHERE Table_name = 'presupuesto';";
                    connection.query(sqlId, function (err, resultId) {
                        if (err) {
                            throw err;      
                        } else {
                            if (resultId.length == 0) {
                                callback("No hay incremento en el ID.", false)
                            } else {
                                var sql = "INSERT INTO presupuesto VALUES (NULL,'" 
                                    + presupuesto.fechaPresupuesto + "','" + presupuesto.idCliente + "','" + 
                                    presupuesto.referenciaProducto + "','" + presupuesto.cantidadProducto + "')";
                                connection.query(sql, function (err, result) {
                                    if (err) {
                                        throw err;
                                    } else {
                                        if (result.length == 0) {
                                            callback("No se ha podido guardar la información.", false)
                                        } else {
                                            callback(null, {'id': resultId, 'generado': true})
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
    }
}

module.exports = presupuestoModel;