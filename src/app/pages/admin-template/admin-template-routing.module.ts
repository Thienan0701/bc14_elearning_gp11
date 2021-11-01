import { AdminTemplateComponent } from './admin-template.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    //Admin page
    {
      path: "",
      component: AdminTemplateComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTemplateRoutingModule { }
