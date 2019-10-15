import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {UsersService} from './users.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [UsersService],
  exports: [UsersComponent]
})
export class UsersModule { }
