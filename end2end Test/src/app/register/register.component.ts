import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ProductService} from '../services/product.service';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private usersService: UserService, private router: Router) { }
  public userForm = this.fb.group({
    identifier: ['', Validators.required],
    fullName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password : ['', Validators.required],
    confirmPassword : ['', Validators.required]
  });
  // tslint:disable-next-line:typedef
  get form() {
    return this.userForm.controls;
  }
  ngOnInit(): void {
  }
  onSubmit(): void {

    const user = {
       identifier:this.userForm.value.identifier,
       fullName: this.userForm.value.fullName,
      lastName: this.userForm.value.lastName,
       emailAddress: this.userForm.value.email,
       password : this.userForm.value.password,
     };
    this.usersService.addUser(user).subscribe(result => {
    console.log(result);
      this.router.navigateByUrl('/');
   });


  }
}
