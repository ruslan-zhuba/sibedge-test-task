import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { UsersModule } from './users/users.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MatToolbarModule, UsersModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
