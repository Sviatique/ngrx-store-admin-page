import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { users } from '../../data/users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users;

  constructor() { }

  ngOnInit() {
    this.users = users;
  }

  toggleUserStatus(userId) {
    const selectedUser = this.users
    .find(user => {
      return user.id === userId;
    });

    selectedUser.isActive = !selectedUser.isActive;
  }
}
