import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CaButtonHeaderComponent } from './ca-button-header/ca-button-header.component';
import { LoadingComponent } from './loading/loading.component';
import { PrimeNGModules } from '../core/modules/primeng.modules';

@NgModule({
  declarations: [
    HeaderComponent,
    CaButtonHeaderComponent,
    LoadingComponent,
  ],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    PrimeNGModules,
  ],
  providers: [],
  exports: [
    CaButtonHeaderComponent,
    HeaderComponent,
    LoadingComponent,
  ],
})
export class ComponentsModule {}
