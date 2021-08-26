import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PaisesModule } from './paises/paises.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    PaisesModule,
    SharedModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
 

/*
  ES BUENA PRACTIVA COLOCAR LOS MODULOS EN EL SIGUIENTE ORDEN
    MODULOS DE ANGULAR
    MODULOS DE TERCEROS
    MODULOS PROPIOS
  ESTO TAMBIEN PUEDE APLICARSE A LAS IMPORTACIONES
*/