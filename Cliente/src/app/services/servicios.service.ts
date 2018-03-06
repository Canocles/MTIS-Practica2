import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

import { Presupuesto } from '../interfaces/presupuesto.interface';

@Injectable()
export class ServiciosService {

  apiURL:string = "http://localhost:3000/api"

  constructor(private http:Http) {}

  validarNIF(nif: string) {
    let requestURL = `${this.apiURL}/validarNIF/${nif}`
    let headers = new Headers({
      'restKey':'soapkeydeprueba12345678'
    });

    return this.http.get(requestURL, { headers })
      .map(res => res.json()); 
  }

  validarIBAN(iban: string) {
    let requestURL = `${this.apiURL}/validarIBAN/${iban}`
    let headers = new Headers({
      'restKey':'soapkeydeprueba12345678'
    });

    return this.http.get(requestURL, { headers })
      .map(res => res.json()); 
  }

  consultaCodigoPostal(cp: string) {
    let requestURL = `${this.apiURL}/consultaCodigoPostal/${cp}`
    let headers = new Headers({
      'restKey':'soapkeydeprueba12345678'
    });

    return this.http.get(requestURL, { headers })
      .map(res => res.json()); 
  }

  generarPresupuesto(presupuesto: Presupuesto) {
    let requestURL = `${this.apiURL}/generarPresupuesto`;
    let body = JSON.stringify(presupuesto);
    let headers = new Headers({
      'restKey':'soapkeydeprueba12345678',
      'Content-Type':'application/json'
    });

    return this.http.post(requestURL, body, { headers })
      .map(res => res.json()); 
  }
}
