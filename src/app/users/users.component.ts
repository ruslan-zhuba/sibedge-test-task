import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import { UsersService } from './users.service';
import {finalize, map, tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './user.interface';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  @Output() loaded = new EventEmitter<boolean>();
  usersList$: Observable<
    MatTableDataSource<User>
  > = this.usersService.getUsers().pipe(
    finalize(() => this.loaded.emit(true)),
    map(users => new MatTableDataSource<User>(users)),
    tap(userDataSource => userDataSource.paginator = this.paginator)
  );

  userTableColumn: string[] = ['email', 'lastname', 'phone', 'city', 'dob'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private usersService: UsersService) {}

}
