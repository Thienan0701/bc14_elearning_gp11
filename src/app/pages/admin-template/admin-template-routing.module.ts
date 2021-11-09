import { AdminTemplateComponent } from './admin-template.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_core/guards/auth.guard';

const routes: Routes = [
    //Admin page
    {
      path: "",
      component: AdminTemplateComponent,
      children:[
        {
          path:"",
          redirectTo:"dashboard",
          pathMatch: "full",
        },
        {
          path: "dashboard",
          loadChildren: ()=>import("./dashboard/dashboard.module").then((m)=>m.DashboardModule),
        },
      ],
      canActivate:[AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTemplateRoutingModule { }
