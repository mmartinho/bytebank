import { Transferencia } from './../../models/transferencia.model';
import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  /**
   * //@Input()
   * não precisa ser mais acessado pelo app.component,
   * pois estamos usando o serviço injetado
   */
  transferencias: Transferencia[] = [];

  constructor(private service: TransferenciaService) { }

  /**
   * @deprecated
   */
    get total(): number {
    return this.service.total();
  }

  ngOnInit(): void {
    /**
     * //this.transferencias = this.service.transferencias;
     */

    /**
     * Recebendo todas as transferências via subscrição de observável
     */
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      this.transferencias = transferencias;
    }, (error) => {
      console.log(error);
    });
  }

  /**
   * @returns number - Total transferido
   */
  get soma(): number {
    let soma = 0;
    this.transferencias.forEach((transferencia) => {
      soma = soma + transferencia.valor;
    });
    return soma;
  }
}
