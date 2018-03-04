import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NifComponent } from './components/nif/nif.component';
import { IbanComponent } from './components/iban/iban.component';
import { CpComponent } from './components/cp/cp.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component'
import { NifresponseComponent } from './components/nif/nifresponse/nifresponse.component'
import { IbanresponseComponent } from './components/iban/ibanresponse/ibanresponse.component';
import { PresupuestoresponseComponent } from './components/presupuesto/presupuestoresponse/presupuestoresponse.component';
import { CpresponseComponent } from './components/cp/cpresponse/cpresponse.component';

const ROUTES: Routes = [
    {
        path: 'validarNIF',
        component: NifComponent
    },
    {
        path: 'validarNIF/:nif',
        component: NifresponseComponent
    },
    {
        path: 'validarIBAN',
        component: IbanComponent
    },
    {
        path: 'validarIBAN/:iban',
        component: IbanresponseComponent
    },
    {
        path: 'consultaCodigoPostal',
        component: CpComponent
    },
    {
        path: 'consultaCodigoPostal/:cp',
        component: CpresponseComponent
    },
    {
        path: 'generarPresupuesto',
        component: PresupuestoComponent
    },
    {
        path: 'generarPresupuesto/:id',
        component: PresupuestoresponseComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'validarNIF'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutes {
    useHash: true;
}