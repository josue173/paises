import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  public pais!: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private paiesService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      // .params ES EL OBSERVABLE EN EL CUAL ESTAN LOS PARAMETROS
      .pipe(
        switchMap((params) => this.paiesService.getPaisID(params.id)),
        // DESPUES DE => SE HACE UN return IMPLICITO DE this.paiesService.getPaisID
        /* 
          switchMap RECIBE EL VALOR DEL OBSERVABLE ANTERIOR (this.activatedRoute.params) Y RETORNA UN NUEVO OBSERVABLE 
          EN VEZ DE RETORNAR this.activatedRoute.params RETORNA this.paiesService.getPaisID(params.id)
        */
        tap(console.log)
        // tap RECIBE EL PRODUCTO DEL Observable ANTERIOR E IMPRIME EN CONSOLA LA RESPUESTA
        // Se utiliza para realizar efectos secundarios para las notificaciones de la fuente observable
      )
      // DENTRO DEL .pipe SE ESPECIFICAN LOS OPERADORES QUE TRABAJARAN CON EL PRODUCTO O RESPUESTA DE this.activatedRoute.params
      .subscribe((pais) => (this.pais = pais));

    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);
    //   this.paiesService.getPaisID(id).subscribe((response)=>{
    //     console.log(response);
    //   })
    // });
  }
}
