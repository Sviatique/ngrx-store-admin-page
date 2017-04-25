import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { users } from '../../data/users';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as user from '../../actions/user';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  private users$: Observable<Array<User>>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.users$ = this.store.select(fromRoot.getUsers);

  }

  toggleUserStatus(userId: number) {
    this.store.dispatch(new user.ToggleStatusAction(userId));
  }
}
