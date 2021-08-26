import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name;capital;alpha2Code;flag;population'
    );
    // HttpParams PERMITE CONFIGURAR LOS PARAMETROS DE LA API
  }

  constructor(private http: HttpClient) {}

  buscarPais(termino: String): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
    /*
      DEBERIA DE COLOCARSE .subscribe DESPUES DE (url) PERO NO QUIERO QUE RETORNE LA INFORMACION DENTRO DEL SERVICIO, SINO A QUIEN SEA QUE HAYA
      LLAMADO AL METODO
      ESTE METODO VA ACA, PORQUE EN LOS SERVICIOS SE HACEN SOLICITUDES HTTPA
      EN .pipe HAY UN OPERADOR rxjs, LOS OPERADORES NO SON MAS QUE FUNCIONES QUE SE EJECUTARAN EN BASE AL PRODUCTO DE LA PETICION http 

      of() ES UNA FUNCION QUE GENERA Observables, TRANSFORMA LO QUE SEA QUE SE COLOCA EN LOS () EN UN Observable
      ESTO ATRAPA EL ERROR Y RETORNA UN ARREGLO VACIO

      ESTE ES EL RETURN CON of()
      return this.http.get(url).pipe(catchError(err=>of([])));
    */
  }
  buscarCapitales(termino: String): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }
  getPaisID(termino: String): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${termino}`;
    return this.http.get<Country>(url, { params: this.httpParams });
  }

  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(tap(console.log));
  }
}
