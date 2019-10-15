import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import {
  MatCardModule,
  MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import { SharedUiModule } from '../shared-ui/shared-ui.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UsersService } from './users.service';
import { of } from 'rxjs';
import { User } from './user.interface';
import { HttpClientModule } from '@angular/common/http';

const user: User = {
  dob: new Date(),
  email: 'elaine.stewart@example.com',
  location: {
    street: '8430 spring st',
    city: 'australian capital territory',
    state: 'australian capital territory',
    postcode: 9711
  },
  name: { title: 'ms', first: 'elaine', last: 'stewart' },
  phone: '08-2967-4867'
};

const UserServiceMock = {
  getUsers() {
    return of([user]);
  }
};

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [
        NoopAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatCardModule,
        SharedUiModule,
        HttpClientModule
      ],
      providers: [UsersService]
    })
      .overrideProvider(UsersService, { useValue: UserServiceMock })
      .compileComponents();
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
