
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTemplateRoutingModule } from './home-template-routing.module';
import { HomeTemplateComponent } from './home-template.component';
import { NavbarHomeComponent } from './_components/navbar-home/navbar-home.component';
import {MaterialModule} from '../../_core/shares/material-module';
import { FooterHomeComponent } from './_components/footer-home/footer-home.component'


@NgModule({
  declarations: [
    HomeTemplateComponent,
    NavbarHomeComponent,
    FooterHomeComponent
  ],
  imports: [
    CommonModule,
    HomeTemplateRoutingModule,
    MaterialModule
  ]
})
export class HomeTemplateModule { }
