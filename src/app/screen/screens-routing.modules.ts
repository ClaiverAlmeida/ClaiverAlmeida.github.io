import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./main/main.module').then((x) => x.MainModule),
  },
  {
    path: 'sobre',
    loadChildren: () =>
      import('./sobre/sobre.module').then((x) => x.SobreModule),
  },
  {
    path: 'curriculo',
    loadChildren: () =>
      import('./curriculo/curriculo.module').then((x) => x.CurriculoModule),
  },
  {
    path: 'projetos',
    loadChildren: () =>
      import('./projetos/projetos-routing.module').then(
        (x) => x.ProjetosRoutingModule
      ),
  },
  {
    path: 'contato',
    loadChildren: () =>
      import('./contatos/contato-routing.module').then(
        (x) => x.contatoRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class ScreenRoutingModule {}
