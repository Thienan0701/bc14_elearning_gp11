import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchCourseRoutingModule } from './search-course-routing.module';
import { SearchCourseComponent } from './search-course.component';
import { SearchItemComponent } from './search-item/search-item.component';


@NgModule({
  declarations: [
    SearchCourseComponent,
    SearchItemComponent
  ],
  imports: [
    CommonModule,
    SearchCourseRoutingModule
  ]
})
export class SearchCourseModule { }
