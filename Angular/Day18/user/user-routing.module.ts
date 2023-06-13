import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListuserComponent } from './listuser/listuser.component';
import { AdduseComponent } from './adduse/adduse.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';

const routes: Routes = [
  {
      path:"",component:ListuserComponent
  },
  {
    path:"adduser",component:AdduseComponent
  },
  {
    path:"update",component:UpdateuserComponent
  },
  {
    path:"delete",component:DeleteuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
