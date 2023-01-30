import { ComponentsModule } from './../../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { CurriculoRoutingModule } from './curriculo-routing.module';



@NgModule({
  declarations: [
    CurriculoComponent
  ],
  imports: [FormsModule, CommonModule, ReactiveFormsModule,CurriculoRoutingModule, ComponentsModule],

})
export class CurriculoModule { }


