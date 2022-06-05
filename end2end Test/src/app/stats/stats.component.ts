import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
// @ts-ignore
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

 hidden = true;
 years =  ['2019','2020','2021','2022'];
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['January', 'February', 'March', 'April','May', 'June','July','August','September',
    'October','November', 'December'];
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataset[] = [
    { data: [30, 37, 31, 40, 25, 30,33,30,35,40,40,28], label: 'Working Hours per week' }
  ];

  constructor(private fb: FormBuilder, private usersService: UserService, private router: Router) { }
  public productForm = this.fb.group({
    year: ['', Validators.required],
    password : ['', Validators.required],
  });
  // tslint:disable-next-line:typedef
  get form() {
    return this.productForm.controls;
  }
  ngOnInit(): void {
  }
  onSubmit(): void {
    this.hidden = ! this.hidden;
  }


}
