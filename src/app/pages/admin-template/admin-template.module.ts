
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavModule, WavesModule, AccordionModule,IconsModule  } from 'ng-uikit-pro-standard'

import { AdminTemplateRoutingModule } from './admin-template-routing.module';
import { AdminTemplateComponent } from './admin-template.component';
import { SidebarAdminComponent } from './_components/sidebar-admin/sidebar-admin.component';
import { NavbarAdminComponent } from './_components/navbar-admin/navbar-admin.component';



@NgModule({
  declarations: [
    AdminTemplateComponent,
    SidebarAdminComponent,
    NavbarAdminComponent
  ],
  imports: [
    CommonModule,
    AdminTemplateRoutingModule,
    SidenavModule,
    WavesModule,
    AccordionModule,
    IconsModule
  ]
})
export class AdminTemplateModule { }
