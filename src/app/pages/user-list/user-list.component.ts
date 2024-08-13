import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  userList: any[] = [];
  userService = inject(UserService);

  ngOnInit(): void {}

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res:any)=>this.userList=res.data);
  }
}
