import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { DatePipe } from '@angular/common';

import { ServiciosService } from '../../services/servicios.service';
import { Presupuesto } from '../../interfaces/presupuesto.interface';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent {

  presupuesto: Presupuesto = {
    fechaPresupuesto: null,
    idCliente: null,
    referenciaProducto: null,
    cantidadProducto: null
  }

  constructor(private serviciosService: ServiciosService,
    private router: Router) {}

  generarPresupuesto(forma: NgForm) {
    this.serviciosService.generarPresupuesto(this.presupuesto)
      .subscribe(data=>{
        this.router.navigate([`/generarPresupuesto/${data.id[0].id}`]);
      }, error => console.error(error))
  }
}
