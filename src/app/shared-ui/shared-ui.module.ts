import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithResetComponent } from './input-with-reset/input-with-reset.component';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DatepickerWithResetComponent } from './datepicker-with-reset/datepicker-with-reset.component';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';

@NgModule({
  declarations: [InputWithResetComponent, DatepickerWithResetComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    SatDatepickerModule,
    SatNativeDateModule,
    MatDatepickerModule,
    FormsModule
  ],
  exports: [InputWithResetComponent, DatepickerWithResetComponent]
})
export class SharedUiModule {}
