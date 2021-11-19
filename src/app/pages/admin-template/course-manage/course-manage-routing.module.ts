import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseManageComponent } from './course-manage.component';

const routes: Routes = [
  {
    path: "",
    component: CourseManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseManageRoutingModule { }
