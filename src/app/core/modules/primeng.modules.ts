import { NgModule } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [GalleriaModule, TieredMenuModule, BreadcrumbModule,InputTextModule],
  exports: [GalleriaModule, TieredMenuModule, BreadcrumbModule,InputTextModule],
  providers: [],
})
export class PrimeNGModules {}
