import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MisAlarmasRoutingModule } from './mis-alarmas-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';
import { MisAlarmasComponent } from './mis-alarmas.component';



@NgModule({
  declarations: [MisAlarmasComponent],
  imports: [
    CommonModule,
    MisAlarmasRoutingModule,
    SharedModule,  
  ]
})
export class MisAlarmasModule { }
