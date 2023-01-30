import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre/sobre.component';
import { SobreRoutingModule } from './sobre-routing.module';
import { PrimeNGModules } from '../../core/modules/primeng.modules';

@NgModule({
  declarations: [SobreComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    SobreRoutingModule,
    ComponentsModule,
    PrimeNGModules,
  ],
  providers: [],
  exports: [],
})
export class SobreModule {}
