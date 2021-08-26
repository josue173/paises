import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent implements OnInit {
  termino: String = '';
  hayError: Boolean = false;
  paises: Country[] = [];
  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarCapitales(this.termino).subscribe(
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

  sugerencias(event: string) {
    this.hayError = false;
    // this.
  }
}
