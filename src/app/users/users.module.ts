import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {UsersService} from './users.service';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule, MatPaginatorModule, MatTableModule} from '@angular/material';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [UsersService],
  exports: [UsersComponent]
})
export class UsersModule { }
