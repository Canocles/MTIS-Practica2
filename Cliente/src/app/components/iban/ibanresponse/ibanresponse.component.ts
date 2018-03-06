import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { ServiciosService } from '../../../services/servicios.service';

@Component({
  selector: 'app-ibanresponse',
  templateUrl: './ibanresponse.component.html',
  styleUrls: ['./ibanresponse.component.css']
})
export class IbanresponseComponent implements OnInit {

  iban: string = null;
  error: string = null;
  peticion: boolean = false;
  existe: boolean = null;

  constructor(private serviciosService: ServiciosService,
    private route: ActivatedRoute) {
      this.route.params
        .subscribe(parametros => {
          this.iban = parametros['iban']
        });
  }

  ngOnInit() {
    this.serviciosService.validarIBAN(this.iban)
    .subscribe(data=>{
      this.peticion = true;
      if (data.existe == undefined) {
        this.existe = data;
      } else {
        this.existe = data.existe;
        this.error = data.message;
      }
    }, error => {
      this.error = error.message;;
    });
  }

}
