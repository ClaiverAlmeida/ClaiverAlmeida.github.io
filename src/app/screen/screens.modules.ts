import { NgModule } from '@angular/core';
import { MainModule } from './main/main.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScreenRoutingModule } from './screens-routing.modules';
import { ComponentsModule } from '../components/components.module';
import { SobreModule } from './sobre/sobre.module';
import { ContatoModule } from './contatos/contato.module';
import { ProjetosModule } from './projetos/projetos.module';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ScreenRoutingModule,
    ComponentsModule,
    MainModule,
    SobreModule,
    ContatoModule,
    ProjetosModule,
  ],
  providers: [],
  exports: [],
})
export class ScreensModule {}
