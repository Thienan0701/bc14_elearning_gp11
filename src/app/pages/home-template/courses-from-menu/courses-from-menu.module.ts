import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesFromMenuRoutingModule } from './courses-from-menu-routing.module';
import { CoursesFromMenuComponent } from './courses-from-menu.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './courses-list/course-item/course-item.component';




@NgModule({
  declarations: [
    CoursesFromMenuComponent,
    CoursesListComponent,
    CourseItemComponent
  ],
  imports: [
    CommonModule,
    CoursesFromMenuRoutingModule
  ]
})
export class CoursesFromMenuModule { }
