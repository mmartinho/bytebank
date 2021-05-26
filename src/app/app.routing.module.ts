import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtratoComponent } from './extrato/extrato.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

const routes: Routes = [
  /**
   * Caminho URL vazio, rediretiona para o caminho de extrato
   */
  {path: '', redirectTo: 'extrato', pathMatch: 'full'},
  /**
   * Caminho URL de extrato, abre o componente de extrato
   */
  {path: 'extrato', component: ExtratoComponent},
  /**
   * Caminho URL de nova transferencia, abre o componente de
   * nova transferecia
   */
  {path: 'nova-transferencia', component: NovaTransferenciaComponent},
];

@NgModule({
  declarations: [
  ],
  imports: [
      /**
       * Cria e configura as rotas "pai ou raiz"
       * {useHash:true} Todas as "routes" são precedidas por "#"
       */
      RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
      /**
       * Quem importar o módulo,
       * vai ganhar de quebra o RouterModule
       */
      RouterModule
  ],
})
export class AppRoutingModule {}
