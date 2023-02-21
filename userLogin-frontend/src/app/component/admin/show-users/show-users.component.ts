import { Component, Input, OnInit } from '@angular/core';

import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss'],
})
export class ShowUsersComponent implements OnInit {
  constructor(private adminService: AdminService) {}
  userDetals: any;

  ngOnInit(): void {
    this.adminService.getAllUsers().subscribe((res) => {
      this.userDetals = res;
      console.log(this.userDetals, 'from child');
    });
  }
}
