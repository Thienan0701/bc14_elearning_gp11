import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';

import { UserInfoRoutingModule } from './user-info-routing.module';
import { UserInfoComponent } from './user-info.component';
import { ModalInfoComponent } from './modal-info/modal-info.component';


@NgModule({
  declarations: [
    UserInfoComponent,
    ModalInfoComponent
  ],
  imports: [
    CommonModule,
    UserInfoRoutingModule,
    MatTabsModule,
    FormsModule
  ]
})
export class UserInfoModule { }
