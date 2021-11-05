import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //localhos://4200 => HomeTemplate
  {
    path: "",
    //lazy loading
    loadChildren: ()=> import("./pages/home-template/home-template.module").then((m)=>m.HomeTemplateModule)
  },
  //adminTemplate
  {
    path: "admin",
    loadChildren: ()=> import("./pages/admin-template/admin-template.module").then((m)=>m.AdminTemplateModule)
  },
  {
    path: "auth",
    loadChildren: ()=> import("./pages/auth/auth.module").then((m)=>m.AuthModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
