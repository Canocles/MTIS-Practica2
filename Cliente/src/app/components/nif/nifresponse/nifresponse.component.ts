import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { ServiciosService } from '../../../services/servicios.service';

@Component({
  selector: 'app-nifresponse',
  templateUrl: './nifresponse.component.html',
  styleUrls: ['./nifresponse.component.css']
})
export class NifresponseComponent implements OnInit {

  nif: string = null;
  peticion: boolean = false;
  existe: boolean = null;

  constructor(private serviciosService: ServiciosService,
              private route: ActivatedRoute) {
    this.route.params
    .subscribe(parametros => {
      this.nif = parametros['nif']
    });
  }

  ngOnInit() {
    this.serviciosService.validarNIF(this.nif)
    .subscribe(data=>{
      this.peticion = true;
      this.existe = data;
    }, error => console.error(error))
  }
}
