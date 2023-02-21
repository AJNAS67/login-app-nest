import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent {
  constructor(private adminService: AdminService) {}
  user: boolean = false;
  viewAllUsers() {
    this.user = true;
  }
}
