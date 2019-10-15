import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithResetComponent } from './input-with-reset.component';

describe('InputWithResetComponent', () => {
  let component: InputWithResetComponent;
  let fixture: ComponentFixture<InputWithResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWithResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
