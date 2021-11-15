import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTemplateRoutingModule } from './home-template-routing.module';
import { HomeTemplateComponent } from './home-template.component';
import { NavbarHomeComponent } from './_components/navbar-home/navbar-home.component';
import {MaterialModule} from '../../_core/shares/material-module'


@NgModule({
  declarations: [
    HomeTemplateComponent,
    NavbarHomeComponent
  ],
  imports: [
    CommonModule,
    HomeTemplateRoutingModule,
    MaterialModule
  ]
})
export class HomeTemplateModule { }
