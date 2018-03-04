import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { ServiciosService } from '../../../services/servicios.service';

@Component({
  selector: 'app-cpresponse',
  templateUrl: './cpresponse.component.html',
  styleUrls: ['./cpresponse.component.css']
})
export class CpresponseComponent implements OnInit {

  cp: string = null;
  peticion: boolean = false;
  existe: boolean = null;
  error: string = null;

  poblacion: string = null;
  provincia: string = null;

  constructor(private serviciosService: ServiciosService,
    private route: ActivatedRoute) {
      this.route.params
        .subscribe(parametros => {
          this.cp = parametros['cp']
        });
  }

  ngOnInit() {
    this.serviciosService.consultaCodigoPostal(this.cp)
      .subscribe(data=> {
        this.peticion = true;
        this.existe = data.existe;
        if (this.existe) {
          this.poblacion = data.datos[0].localidad;
          this.provincia = data.datos[0].provincia;
        } else {
          this.error = data.message;
        }
      });
  }
}
