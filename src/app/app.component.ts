import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  /**
   * array de qualquer coisa
   */
  transferencias: any[] = [];

  transferir(event: any): void {
    console.log(event);
    /**
     * Merge de campos
     */
    const transferencia = {...event, data: new Date()};
    /**
     * Empilhamento de array
     */
    this.transferencias.push(transferencia);
  }
}
