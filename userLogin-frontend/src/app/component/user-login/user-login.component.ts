import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { UserLoginService } from 'src/app/service/user-login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';
import { Observable, Subject ,BehaviorSubject} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  constructor(private loginService: UserLoginService, private router: Router) {}
  exform!: FormGroup;

  ngOnInit() {
    this.exform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
    const observable = new Observable((obj) => obj.next(Math.random()));
    //subscriber1
    observable.subscribe((v) => console.log(v));
    //subscriber1
    observable.subscribe((v) => console.log(v));

    const subject = new Subject();
    subject.subscribe((d) => console.log(d, 'ajnas'));
    subject.subscribe((d) => console.log(d, 'ajnas'));
    subject.next(Math.random());
    const data = ajax('https://jsonplaceholder.typicode.com/users');
    data.subscribe((d) => {
      console.log(d);
    });
    data.subscribe((d) => {
      console.log(d, 'ajaj');
    });
    const sub = new Subject();
    sub.subscribe((d) => console.log(d, 'sub'));
    sub.subscribe((d) => console.log(d, 'sub'));
    const result=data.subscribe(sub)

  }

  clicksub() {
    console.log(this.exform.value, 'reee');
    let email = this.exform.value.email;
    let password = this.exform.value.password;
    this.loginService
      .loginUser({ email: `${email}`, password: `${password}` })
      .subscribe((res) => {
        console.log(res, 'ffffffffffffffffffff');

        if (res.status) {
          localStorage.setItem('token', res.token);
          Swal.fire('Hi', `${res.message}`, 'success');

          this.router.navigate(['/']);
        } else {
          Swal.fire('Hi', `${res.message}`, 'error');
        }
        //   function parseJwt(token: any) {
        //     return JSON.parse(
        //       Buffer.from(token.split('.')[1], 'base64').toString()
        //     );
        //   }
        //  const aj= parseJwt(res.token);
        //  console.log(aj,'akakakkakaka');

        // var token: any = localStorage.getItem('token');
        // console.log(token,'tokentoken');

        // var decoded = jwt_decode(token);
        // console.log(decoded);
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
