import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'

import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-iban',
  templateUrl: './iban.component.html',
  styleUrls: ['./iban.component.css']
})
export class IbanComponent {

  iban: string = null;

  constructor(private serviciosService: ServiciosService,
              private router: Router) {}
              
  validarIBAN(forma: NgForm) {
    this.router.navigate([`/validarIBAN/${this.iban}`]);
  }
}
