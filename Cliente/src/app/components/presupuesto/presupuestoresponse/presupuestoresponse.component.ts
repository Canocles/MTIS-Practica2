import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { ServiciosService } from '../../../services/servicios.service';

@Component({
  selector: 'app-presupuestoresponse',
  templateUrl: './presupuestoresponse.component.html',
  styleUrls: ['./presupuestoresponse.component.css']
})
export class PresupuestoresponseComponent{

  idGenerado: string = null;
  error: string = null;

  constructor(private serviciosService: ServiciosService,
    private route: ActivatedRoute) {
      this.route.params
        .subscribe(parametros => {
          if (parametros['id'] !== 'error')
            this.idGenerado = parametros['id'];
          else
            this.error = 'La RestKey es inválida';
        });
    }
}
