import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { UsersService } from './users.service';
import { finalize } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {User} from './user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Output() loaded = new EventEmitter<boolean>();
  usersList$: Observable<User[]> = this.usersService
    .getUsers()
    .pipe(finalize(() => (this.loaded.emit(true))));

  constructor(private usersService: UsersService) {}

  ngOnInit() {}
}
