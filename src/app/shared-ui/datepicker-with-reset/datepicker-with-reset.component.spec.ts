import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerWithResetComponent } from './datepicker-with-reset.component';

describe('DatepickerWithResetComponent', () => {
  let component: DatepickerWithResetComponent;
  let fixture: ComponentFixture<DatepickerWithResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerWithResetComponent ]
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
