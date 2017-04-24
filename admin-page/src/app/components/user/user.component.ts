import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Output() onToggleUserStatus = new EventEmitter<number>();
  @Input() user;

  constructor() { }

  ngOnInit() {
  }

  toggleUserStatus(userId) {
    this.onToggleUserStatus.emit(userId);
  }
}
