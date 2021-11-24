import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WavesModule, IconsModule, DropdownModule } from 'ng-uikit-pro-standard';
import {MatTabsModule} from '@angular/material/tabs';

import { UserManageRoutingModule } from './user-manage-routing.module';
import { UserManageComponent } from './user-manage.component';
import { ModalUserManageComponent } from './modal-user-manage/modal-user-manage.component';
import { ModalEditComponent } from './modal-edit/modal-edit.component';



@NgModule({
  declarations: [
    UserManageComponent,
    ModalUserManageComponent,
    ModalEditComponent
  ],
  imports: [
    CommonModule,
    UserManageRoutingModule,
    WavesModule,
    MatTabsModule,
    FormsModule,
    IconsModule,
    DropdownModule.forRoot()
  ]
})
export class UserManageModule { }
