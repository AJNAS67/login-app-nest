import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent {
  checkAdmin() {
    return !!localStorage.getItem('adminToken');
  }
  AdminLogout() {
    localStorage.removeItem('adminToken');
  }
}
