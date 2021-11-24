import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WavesModule, IconsModule, DropdownModule } from 'ng-uikit-pro-standard';
import {MatTabsModule} from '@angular/material/tabs';

import { CourseManageRoutingModule } from './course-manage-routing.module';
import { CourseManageComponent } from './course-manage.component';


@NgModule({
  declarations: [
    CourseManageComponent
  ],
  imports: [
    CommonModule,
    CourseManageRoutingModule,
    WavesModule,
    MatTabsModule,
    FormsModule,
    IconsModule,
    DropdownModule.forRoot()
  ]
})
export class CourseManageModule { }
