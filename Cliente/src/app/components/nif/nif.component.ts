import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

import { ServiciosService } from '../../services/servicios.service';
 
@Component({
  selector: 'app-nif',
  templateUrl: './nif.component.html',
  styleUrls: ['./nif.component.css']
})
export class NifComponent { 

  nif: string = null;

  constructor(private serviciosService: ServiciosService,
              private router: Router) {}

  validarNIF(forma: NgForm) {
    this.router.navigate([`/validarNIF/${this.nif}`]);
  }
}
