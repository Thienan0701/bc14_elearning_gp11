import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WavesModule } from 'ng-uikit-pro-standard';
import {MatTabsModule} from '@angular/material/tabs';

import { UserManageRoutingModule } from './user-manage-routing.module';
import { UserManageComponent } from './user-manage.component';



@NgModule({
  declarations: [
    UserManageComponent
  ],
  imports: [
    CommonModule,
    UserManageRoutingModule,
    WavesModule,
    MatTabsModule,
    FormsModule
  ]
})
export class UserManageModule { }
