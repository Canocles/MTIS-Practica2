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

  error: string = null;

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
      if (data.message)
        this.error = data.message;
      else 
        this.existe = data;
    });
  }
}
