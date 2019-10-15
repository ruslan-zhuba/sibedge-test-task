import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import {
  MatCardModule,
  MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import { SharedUiModule } from '../shared-ui/shared-ui.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    SharedUiModule,
    HttpClientModule
  ],
  providers: [UsersService],
  exports: [UsersComponent]
})
export class UsersModule {}
