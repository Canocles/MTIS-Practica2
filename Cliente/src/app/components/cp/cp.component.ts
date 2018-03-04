import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-cp',
  templateUrl: './cp.component.html',
  styleUrls: ['./cp.component.css']
})
export class CpComponent {

  cp: string = null;

  constructor(private serviciosService: ServiciosService,
    private router: Router) {}

  consultaCodigoPostal(forma: NgForm) {
    this.router.navigate([`/consultaCodigoPostal/${this.cp}`]);
  }
}
