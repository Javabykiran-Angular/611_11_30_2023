import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListuserComponent } from './listuser/listuser.component';
import { AdduseComponent } from './adduse/adduse.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';


@NgModule({
  declarations: [
    ListuserComponent,
    AdduseComponent,
    UpdateuserComponent,
    DeleteuserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
