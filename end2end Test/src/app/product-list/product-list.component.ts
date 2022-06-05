import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  users: any;
  headers = [
    'Worker Identifier',
    'First Name',
    'Last Name',
    'Email Address',
    '  Action '
  ];
  constructor(private userService :UserService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.userService.getUser().subscribe(result => {
      this.users = result;
    }, error => {
      console.log(error);
    });

  }

}
