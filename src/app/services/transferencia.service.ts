import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from 'src/models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  /**
   * @deprecated
   */
  private listaTransferencia: any[];
  /**
   * @var
   */
  private url = 'http://localhost:3000/transferencias';

/*   constructor() {
    this.listaTransferencia = [];
  } */

  /**
   * @deprecated
   */
  get transferencias(): any {
    return this.listaTransferencia;
  }

  /**
   * @deprecated
   */
  adicionar(transferencia: any): void {
    this.hidratar(transferencia);
    /** Empilhamento de array */
    this.listaTransferencia.push(transferencia);
  }

  /**
   * @deprecated
   */
  total(): number {
    let soma = 0;
    this.listaTransferencia.forEach( (transferencia) => {
      soma = soma + transferencia.valor;
    });
    return soma;
  }

  /**
   * @param httpClient Injeção do client http
   */
  constructor(private httpClient: HttpClient) {}

  /**
   * @param transferencia A transferencia a hidratar
   */
  private hidratar(transferencia: Transferencia): void {
    transferencia.data = new Date().toDateString();
  }

  /**
   * Repassa todas as transferencias históricas em um observável
   * @returns Observable<Transferencia[]>
   */
  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  /**
   * Repassa a nova transferencia em um observável
   * @returns Observable<Transferencia>
   */
  nova(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

}
