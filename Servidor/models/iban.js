var mysql = require('mysql')

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'practica1'
});

var ibanModel = {};

function validar(IBAN) { 
    //Se pasa a Mayusculas
    IBAN = IBAN.toUpperCase();
    //Se quita los blancos de principio y final.
    IBAN = IBAN.replace(/\s/g, ""); //Y se quita los espacios en blanco dentro de la cadena

    var letra1,letra2,num1,num2;
    var isbanaux;
    var numeroSustitucion;
    //La longitud debe ser siempre de 24 caracteres
    if (IBAN.length != 24) {
        return [false, "La longitud del IBAN es incorrecta."];
    }

    // Se coge las primeras dos letras y se pasan a números
    letra1 = IBAN.substring(0, 1);
    letra2 = IBAN.substring(1, 2);
    if (letra1 !== "E" || letra2 !== "S") {
        return [false, "Los primeros dos caracteres deben empezar por ES"];
    }
    num1 = getnumIBAN(letra1);
    num2 = getnumIBAN(letra2);
    //Se sustituye las letras por números.
    isbanaux = String(num1) + String(num2) + IBAN.substring(2);
    // Se mueve los 6 primeros caracteres al final de la cadena.
    isbanaux = isbanaux.substring(6) + isbanaux.substring(0,6);

    //Se calcula el resto, llamando a la función modulo97, definida más abajo
    resto = modulo97(isbanaux);
    if (resto == 1) {
        return [true, null];
    } else {
        return [false, "El módulo no coincide con los caracteres."];
    }
}

function modulo97(iban) {
    var parts = Math.ceil(iban.length/7);
    var remainer = "";

    for (var i = 1; i <= parts; i++) {
        remainer = String(parseFloat(remainer+iban.substr((i-1)*7, 7))%97);
    }

    return remainer;
}

function getnumIBAN(letra) {
    ls_letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return ls_letras.search(letra) + 10;
}

ibanModel.validarIBAN = function(IBAN, restKey, callback) {
    if (connection) {
        var keyExists = "SELECT * FROM soapkey WHERE clave = '" + restKey + "'";
        connection.query(keyExists, function (err, key) {
            if (err) {
                throw err;      
            } else {
                if (key.length == 0) {
                    callback("La RestKey es inválida", false)
                } else {
                    var valido = validar(IBAN);
                    callback(valido[1], valido[0])
                }
            }
        });
    }
}

module.exports = ibanModel;
