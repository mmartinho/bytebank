import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  valor = 10;
  destino = 20;

  transferir(): void {
    console.log('Solicitada nova transferencia');
    console.log('valor: ', this.valor);
    console.log('destino: ', this.destino);
  }
}
