import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { USERS_COMPONENTS } from './components'
import { UsersRoutingModule } from './users.routing.module'

@NgModule({
  declarations: [...USERS_COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  exports: [],
  providers: [],
})
export class UsersModule { }
