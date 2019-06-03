import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmployeesService} from '../employees/employees.service';
import {Employee} from '../employees/employee.model';
import {CdkDragDrop, CdkDragEnd, CdkDragStart, moveItemInArray} from '@angular/cdk/drag-drop';
import {Subscription} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  animations: [
    trigger('fadeIn', [
      state('show', style({
        opacity: 1
      })),
      state('fade', style({
        opacity: 0
      })),
      transition('fade <=> show', animate(1000)),
    ]),
  ]

})

export class EmployeeComponent implements OnInit, OnDestroy {
  srcSword = 'https://upload.wikimedia.org/wikipedia/commons/1/14/Lightsaber%2C_silver_hilt%2C_blue_blade.png';
  employees: Employee[] = [];
  employeesSubscription: Subscription;
  state: string;

  constructor(private employeesService: EmployeesService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.employeesService.fetchData()
      .subscribe((response) => {
        this.employees = response;
      });
  }

  drop(event: CdkDragDrop<Employee[]>) {
    moveItemInArray(this.employees, event.previousIndex, event.currentIndex);
  }

  dragStarted(event: CdkDragStart) {
    this.state = 'fade';
    event.source.element.nativeElement.lastChild.hidden = 'true';
  }

  dragEnded(event: CdkDragEnd) {
    this.state = 'show';
    event.source.element.nativeElement.lastChild.hidden = '';
  }


  ngOnDestroy() {
    this.employeesSubscription.unsubscribe();
  }

}
