import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { PorCapitalComponent } from './paises/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';

const routes:Routes = [
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: "full"
    /*
      full PARA QUE CAIGA EN ESTE LUGAR, SI NO TIENE patmatch, TAMBIEN COINCIDIRIA CON EL STRING VACIO
      CONFIGURACION DE LA RUTA PRINCIPAL, ES EL PRIMER COMPONENTE QUE QUIERO MOSTAR CUANDO ENTREN A LA 
      PAGINA, ESTO SE HACE CON LAS ''
    */
  },
  {
    path: 'region',
    component: PorRegionComponent
  },
  {
    path: 'capital',
    component: PorCapitalComponent,
  },
  {
    path: 'pais/:id', 
    /* 
      'pais/guatemala' NO ES CORRECTO, PORQUE SE LE DICE EXPLICITAMENTE EL PAIS, NO ES DINAMICO, PARA
      QUE SEA DINAMICO SE COLOCAN : SEGUIDO DEL NOMBRE DEL ARGUMENTO
    */
    component: VerPaisComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
  /* 
    RUTA EN CASO QUE EL USUARIO ENTRE A UNA RUTA NO ESPECIFICADA ANTERIORMENTE, 
    ** REPRESENTA A CUALQUIER PATH O URL, QUE NO HAYA SIDO ESPECIFICADO
    REDIRECCIONA AL HOME, PORQUE SE LE INDICA '', COMILLAS QUE REPRESENTAN AL HOME
  */
]
/*
  ESTA ES SOLA LA DEFINICION DE LAS RUTAS, NO SE LES ESTA DANDO USO
  LAS RUTAS NO SE EXPORTAN COMO TAL
  ESTE ES EL SISTEMA DE RUTAS PRINCIPALES 
*/

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}

/*
  RouterModule HARA LA CONFIGURACION DE LAS RUTAS.
  .forRoot es para las rutas principales.
  .forChild es para las rutas hijas.
  EXPORTAR RouterModule ES UNA BUENA PRACTICA
  LOS MODULOS DE RUTAS, DEBEN IMPORTARSE EN EL MODULO PRINCIPAL app.module.ts

  SE HACE "USO" DE LAS RUTAS CUANDO SE IMPORTAN EN EL MODULO PRINCIPAL
*/