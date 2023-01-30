
import { ComponentsModule } from 'src/app/components/components.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProjetosComponent } from './projetos/projetos.component';
import { ProjetosRoutingModule } from './projetos-routing.module';
import { PrimeNGModules } from '../../core/modules/primeng.modules';

@NgModule({
  declarations: [ProjetosComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ProjetosRoutingModule,
    ComponentsModule,
    PrimeNGModules
  ],

  providers: [],
  exports: [],
})
export class ProjetosModule {}
