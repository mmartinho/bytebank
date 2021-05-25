import { Transferencia } from './../../models/transferencia.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
/*   @Output() aoTransferir = new EventEmitter<any>(); */

  valor = 10;
  destino = 20;

  /**
   * @param service Serviço injetado
   */
  constructor(private service: TransferenciaService) {}

  ngOnInit(): void {}

  /**
   * Transferencia usando uma função síncrona do serviço
   * @deprecated
   */
  transferir(): void {
    console.log('Solicitada nova transferencia');
    const valorEmitir = {valor: this.valor, destino: this.destino};
    /**
     * Transferencia usando evento
     * this.aoTransferir.emit(valorEmitir);
     */
    /**
     * Transferencia usando serviço injetado
     */
    this.service.adicionar(valorEmitir);
    this.limparCampos();
  }

  /**
   * Transferencia usando subscrição de observável do serviço
   */
  realizar(): void {
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.service.nova(valorEmitir).subscribe((resultado) => {
      console.log(resultado);
      this.limparCampos();
    }, (error) => console.error(error));
  }

  limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
