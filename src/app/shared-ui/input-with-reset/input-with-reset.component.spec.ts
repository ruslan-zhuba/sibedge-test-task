import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithResetComponent } from './input-with-reset.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

describe('InputWithResetComponent', () => {
  let component: InputWithResetComponent;
  let fixture: ComponentFixture<InputWithResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWithResetComponent ],
      imports: [
        NoopAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule
      ]
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
