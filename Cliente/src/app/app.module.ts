import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NifComponent } from './components/nif/nif.component';
import { IbanComponent } from './components/iban/iban.component';
import { CpComponent } from './components/cp/cp.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { NifresponseComponent } from './components/nif/nifresponse/nifresponse.component';
import { PresupuestoresponseComponent } from './components/presupuesto/presupuestoresponse/presupuestoresponse.component';
import { CpresponseComponent } from './components/cp/cpresponse/cpresponse.component';
import { IbanresponseComponent } from './components/iban/ibanresponse/ibanresponse.component';

import { AppRoutes } from './app.routes';

import { ServiciosService } from './services/servicios.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NifComponent,
    IbanComponent,
    CpComponent,
    PresupuestoComponent,
    NifresponseComponent,
    PresupuestoresponseComponent,
    CpresponseComponent,
    IbanresponseComponent,
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
