import {
  Component,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';
import { UsersService } from './users.service';
import { map, scan, takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { User } from './user.interface';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { UserFilter } from './user-filter.interface';
import { SatDatepickerRangeValue } from 'saturn-datepicker';
import * as R from 'ramda';
import { pathLteDate, pathGteDate, startsWithCurryFn } from '../utils';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnDestroy {
  @Output() loaded = new EventEmitter<boolean>();
  private onDestroy$ = new Subject();
  private filters$ = new BehaviorSubject<Partial<UserFilter>>({
    birthday: null,
    city: '',
    lastName: '',
    phone: ''
  });
  usersList$: Observable<MatTableDataSource<User>> = combineLatest(
    this.usersService.getUsers().pipe(tap(() => this.loaded.emit(true))),
    this.filters$.pipe(
      scan<Partial<UserFilter>>((acc, curr) => ({ ...acc, ...curr }), {})
    )
  ).pipe(
    tap(([users, filters]) => console.log(users[0], filters)),
    map(([users, filters]) =>
      R.filter(
        R.allPass([
          startsWithCurryFn(['name', 'last'], filters.lastName),
          startsWithCurryFn(['location', 'city'], filters.city),
          startsWithCurryFn(['phone'], filters.phone),
          ...(filters.birthday
            ? [
                pathGteDate(['dob'], filters.birthday.begin),
                pathLteDate(['dob'], filters.birthday.end)
              ]
            : [])
        ]),
        users
      )
    ),
    map(users => {
      const dataSource = new MatTableDataSource<User>(users);
      dataSource.paginator = this.paginator;
      return dataSource;
    }),
    takeUntil(this.onDestroy$)
  );

  userTableColumn: string[] = ['email', 'lastname', 'phone', 'city', 'dob'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private usersService: UsersService) {}

  onChange(
    type: keyof UserFilter,
    value: SatDatepickerRangeValue<Date> | string
  ) {
    this.filters$.next({
      [type]: value
    });
  }

  ngOnDestroy(): void {
    this.filters$.complete();
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
