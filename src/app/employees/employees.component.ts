import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmployeesService} from './employees.service';
import {Subscription} from 'rxjs';
import {startWith, delay} from 'rxjs/operators';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, OnDestroy {
  srcSword = 'https://upload.wikimedia.org/wikipedia/commons/1/14/Lightsaber%2C_silver_hilt%2C_blue_blade.png';
  loading: boolean;
  loadingSubscription: Subscription;

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.loadingSubscription = this.employeesService.showSpinner
      .pipe(startWith(null),  delay(0))
      .subscribe( (value) => {
      this.loading = value;
    });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}
