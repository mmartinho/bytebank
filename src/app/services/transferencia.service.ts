import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  /**
   * @param transferencia
   */
  adicionar(transferencia: any) {
    this.hidratar(transferencia);
    /** Empilhamento de array */
    this.listaTransferencia.push(transferencia);
  }

  total() {
    let soma = 0;
    this.listaTransferencia.forEach( (transferencia) => {
      soma = soma + transferencia.valor;
    });
    return soma;
  }

  /**
   * @param transferencia
   */
  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
