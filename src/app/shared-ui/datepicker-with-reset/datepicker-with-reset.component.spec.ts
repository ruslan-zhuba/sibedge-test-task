import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerWithResetComponent } from './datepicker-with-reset.component';
import {MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {SatDatepickerModule, SatNativeDateModule} from 'saturn-datepicker';
import {FormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('DatepickerWithResetComponent', () => {
  let component: DatepickerWithResetComponent;
  let fixture: ComponentFixture<DatepickerWithResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerWithResetComponent ],
      imports: [
        NoopAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        SatDatepickerModule,
        SatNativeDateModule,
        MatDatepickerModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerWithResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
