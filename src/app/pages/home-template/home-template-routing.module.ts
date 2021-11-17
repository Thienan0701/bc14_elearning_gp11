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
      //Detail
      {
        path: "detail/:id",
        loadChildren: ()=>import("./detail-course/detail-course.module").then((m)=>m.DetailCourseModule),
      },
      //Register
      {
        path: "register",
        loadChildren: ()=>import("./register/register.module").then((m)=>m.RegisterModule),
      },
      //Menu click
      {
        path: "list-course-menu/:id",
        loadChildren: ()=>import("./courses-from-menu/courses-from-menu.module").then((m)=>m.CoursesFromMenuModule)
      },
      //Search course
      {
        path: "search-course/:name",
        loadChildren: ()=>import("./search-course/search-course.module").then((m)=>m.SearchCourseModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeTemplateRoutingModule { }
