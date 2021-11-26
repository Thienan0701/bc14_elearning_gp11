import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WavesModule, IconsModule, DropdownModule } from 'ng-uikit-pro-standard';
import {MatTabsModule} from '@angular/material/tabs';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { CourseManageRoutingModule } from './course-manage-routing.module';
import { CourseManageComponent } from './course-manage.component';
import { ModalSubscribeCourseComponent } from './modal-subscribe-course/modal-subscribe-course.component';
import { ModalEditCourseComponent } from './modal-edit-course/modal-edit-course.component';


@NgModule({
  declarations: [
    CourseManageComponent,
    ModalSubscribeCourseComponent,
    ModalEditCourseComponent
  ],
  imports: [
    CommonModule,
    CourseManageRoutingModule,
    WavesModule,
    MatTabsModule,
    FormsModule,
    IconsModule,
    CKEditorModule,
    DropdownModule.forRoot()
  ]
})
export class CourseManageModule { }
