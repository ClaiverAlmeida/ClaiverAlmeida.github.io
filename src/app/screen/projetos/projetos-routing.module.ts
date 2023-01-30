
import { NgModule,  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetosComponent } from './projetos/projetos.component';

export const routes: Routes = [
  {
    path: '',
    component: ProjetosComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetosRoutingModule {}
