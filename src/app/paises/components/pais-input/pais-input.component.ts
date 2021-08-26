import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  public debouncer: Subject<string> = new Subject();
  // Subject es un tipo especial de observable que permite la transmisión múltiple de valores a muchos observadores.
  public termino: string = '';

  ngOnInit() {
    this.debouncer.pipe(debounceTime(30)).subscribe((response) => {
      // El subscribe no se emitira hasta que el Observable "debouncer" deje de emitir valores por las siguientes 300 milesimas de segundo
      // .pipe es una "conexion" o filtro que permite trasnformar la salida del "subscribe"
      this.onDebounce.emit(response);
      // console.log('debouncer: ', response);
    });
  }

  buscar() {
    this.onEnter.emit(this.termino);
    this.debouncer.subscribe;
  }
  teclaPresionada() {
    this.debouncer.next(this.termino);
    // .next es el siguiente termino a emitir
  }
}
