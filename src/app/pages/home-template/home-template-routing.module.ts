import { HomeTemplateComponent } from './home-template.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //Home template
  {
    path: "",
    component: HomeTemplateComponent,
    children :[
      //Home page
      {
        path: "",
        loadChildren: ()=>import("./home/home.module").then((m)=>m.HomeModule),
      },
      //About
      {
        path: "about",
        loadChildren: ()=>import("./about/about.module").then((m)=>m.AboutModule),
      },
      //List-course
      {
        path: "list-course",
        loadChildren: ()=>import("./list-course/list-course.module").then((m)=>m.ListCourseModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeTemplateRoutingModule { }
