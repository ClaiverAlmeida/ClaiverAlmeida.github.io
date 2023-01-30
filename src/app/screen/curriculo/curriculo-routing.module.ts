import { CurriculoComponent } from './curriculo/curriculo.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: CurriculoComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurriculoRoutingModule {}


