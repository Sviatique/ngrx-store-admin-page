import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  @Input() users;
  @Output() onUserStatusToggle = new EventEmitter<number>();

  constructor() { }

  toggleUserStatus(userId) {
    this.onUserStatusToggle.emit(userId);
  }
}
