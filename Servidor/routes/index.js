var NIFModel = require('../models/nif');
var IBANModel = require('../models/iban');
var CPModel = require('../models/cp');
var presupuestoModel = require('../models/presupuesto');

module.exports = function(app) {
	app.get("/api/validarNIF/:nif", function (req, res) {
		var nif = req.params.nif;
		var restKey = req.get('restKey');
		if(nif.length == 9) {
			NIFModel.validarNIF(nif, restKey, function (error, data) {
				if (error) {
					res.status(200).json({"message":"La RestKey es inválida."});
				} else {
					res.status(200).json(data);
				}
			});
		}
		else {
			res.status(400).json({"message":"El NIF no tiene el formato correcto"});
		}
	});

	app.get("/api/validarIBAN/:iban", function (req, res) {
		var iban = req.params.iban;
		var restKey = req.get('restKey');
		if(iban) {
			IBANModel.validarIBAN(iban, restKey, function (error, data) {
				if (error) {
					res.status(200).json({ existe: data, message: error });
				} else {
					res.status(200).json(data);
				}
			});
		}
		else {
			res.status(400).json({"msg":"El IBAN no tiene el formato correcto"});
		}
	});

	app.get("/api/consultaCodigoPostal/:cp", function (req, res) {
		var cp = req.params.cp;
		var restKey = req.get('restKey');
		if(cp.length == 5) {
			CPModel.consultaCodigoPostal(cp, restKey, function (error, data) {
				if (error) {
					res.status(200).json({"existe": data, "message": error});
				} else {
					res.status(200).json(data);
				}
			});
		}
		else {
			res.status(400).json({"message":"El Código Postal no tiene el formato correcto"});
		}
	});

	app.post("/api/generarPresupuesto", function(req, res) {
		var restKey = req.get('restKey');
		if (req.body.fechaPresupuesto != '' && req.body.idCliente != '' 
			&& req.body.referenciaProducto != '' && req.body.cantidadProducto != '') {
			var presupuestoData = {
				fechaPresupuesto: req.body.fechaPresupuesto,
				idCliente: req.body.idCliente,
				referenciaProducto: req.body.referenciaProducto,
				cantidadProducto: req.body.cantidadProducto
			}
			presupuestoModel.generarPresupuesto(presupuestoData, restKey, function (error, data) {
				if (error) {
					res.status(200).json({ 'message': error });
				} else {
					res.status(200).json(data);
				}
			});
		} else {
			res.status(400).json({"message":"El presupuesto no tiene el formato correcto"});
		}
	});
}