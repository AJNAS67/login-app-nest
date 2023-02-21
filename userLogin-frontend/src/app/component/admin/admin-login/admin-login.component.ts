import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {
  exform!: FormGroup;
  constructor(private adminService: AdminService,private router:Router) {}

  ngOnInit(): void {
    this.exform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }
  clicksub() {
    console.log(this.exform.value, 'reee');
    let email = this.exform.value.email;
    let password = this.exform.value.password;
    this.adminService
      .adminLogin({ email: `${email}`, password: `${password}` })
      .subscribe((res) => {
        console.log(res, 'ffffffffffffffffffff');

        if (res.status) {
          localStorage.setItem('adminToken', res.token);
          Swal.fire('Hi', `${res.message}`, 'success');

          this.router.navigate(['/admin']);
        } else {
          Swal.fire('Hi', `${res.message}`, 'error');
        }
      });

    // this.loginService.loginUser(this.exform.value);
    this.exform.reset();
  }

  get email() {
    return this.exform.get('email');
  }

  get password() {
    return this.exform.get('password');
  }
}
