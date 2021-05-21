import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit{
  @Output() aoTransferir = new EventEmitter<any>();

  valor = 10;
  destino = 20;

  constructor(private service: TransferenciaService) {}

  ngOnInit(): void {

  }

  transferir(): void {
    console.log('Solicitada nova transferencia');
    const valorEmitir = {valor: this.valor, destino: this.destino};
    /**
     * Não é mais necessário disparar o evento:
     * this.aoTransferir.emit(valorEmitir);
     * ...
     */
    /**
     * ...ao invés disso, uso o serviço singleton injetado:
     */
    this.service.adicionar(valorEmitir);
    this.limparCampos();
  }

  limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
