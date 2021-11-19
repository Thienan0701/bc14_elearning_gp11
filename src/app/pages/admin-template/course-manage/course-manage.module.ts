import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseManageRoutingModule } from './course-manage-routing.module';
import { CourseManageComponent } from './course-manage.component';


@NgModule({
  declarations: [
    CourseManageComponent
  ],
  imports: [
    CommonModule,
    CourseManageRoutingModule
  ]
})
export class CourseManageModule { }
