
import { ComponentsModule } from 'src/app/components/components.module';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { ContatoComponent } from './contato/contato.component';
import { contatoRoutingModule } from './contato-routing.module';
import { PrimeNGModules } from '../../core/modules/primeng.modules';

@NgModule({
  declarations: [ContatoComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    contatoRoutingModule,
    ComponentsModule,
    PrimeNGModules
  ],

  providers: [],
  exports: [],
})
export class ContatoModule {}
