import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users = [
        {
            name: 'User 1',
            isActive: true
        },
        {
            name: 'User 2',
            isActive: true
        },
        {
            name: 'User 3',
            isActive: true
        },
        {
            name: 'User 4',
            isActive: false
        }
  ];
  constructor() { }

  ngOnInit() {
  }

}
