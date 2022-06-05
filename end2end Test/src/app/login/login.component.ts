import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private usersService: UserService, private router: Router) { }
  public userForm = this.fb.group({
    email: ['', Validators.required],
    password : ['', Validators.required],
  });
  // tslint:disable-next-line:typedef
  get form() {
    return this.userForm.controls;
  }
  ngOnInit(): void {
  }
  onSubmit(): void {

    const user = {
      emailAddress: this.userForm.value.email,
      password : this.userForm.value.password,
    };
    this.usersService.login(user).subscribe(result => {
      console.log(result);
      this.router.navigateByUrl('/dashboard');
    });


  }

}
