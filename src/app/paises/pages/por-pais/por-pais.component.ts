import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: Boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrar: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (error) => {
        this.hayError = true;
        this.paises = [];
      }
    );
    /*
      ACA SE COLOCA EL .subscribe PARA QUE SE "DISPARE", PARA QUE RETORE LA INFORMACION ACA
    */
  }

  sugerencias(termino: string){
    this.termino = termino;
    this.hayError = false;
    this.mostrar = true;
    this.paisService.buscarPais(termino).subscribe((response)=>{
      this.paisesSugeridos = response.splice(0,3);
    })
  }

  buscarSugerido(termino: string){
    this.buscar(termino);
  }
}
