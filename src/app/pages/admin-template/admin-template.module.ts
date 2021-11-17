
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTemplateRoutingModule } from './admin-template-routing.module';
import { AdminTemplateComponent } from './admin-template.component';
import { SidebarAdminComponent } from './_components/sidebar-admin/sidebar-admin.component';
import { ChartsModule, WavesModule } from 'ng-uikit-pro-standard';



@NgModule({
  declarations: [
    AdminTemplateComponent,
    SidebarAdminComponent
  ],
  imports: [
    CommonModule,
    AdminTemplateRoutingModule
  ]
})
export class AdminTemplateModule { }
