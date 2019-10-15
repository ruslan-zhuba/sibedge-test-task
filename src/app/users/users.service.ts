import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<{ results: User[] }>('/raw/task/users.json').pipe(
      map(({ results }) => {
        return results.map(r => ({ ...r, dob: new Date(r.dob) }));
      }),
      delay(2000)
    );
  }
}
