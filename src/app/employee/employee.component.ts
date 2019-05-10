import {Component, OnInit} from '@angular/core';
import {EmployeesService} from '../employees/employees.service';
import {Employee} from '../employees/employee.model';
import {animate, style, transition, trigger} from '@angular/animations';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  animations: [
    trigger('slideState', [
      transition(':enter', [
        style({
          transform: 'translateY(-20%)'
        }),
        animate('300ms ease-out', style({
          transform: 'translateY(0)'
        }))
      ]),
      transition(':leave', [
        style({
          transform: 'translateY(0)'
        }),
        animate('300ms ease-out', style({
          transform: 'translateY(-20%)'
        }))
      ]),
    ]),
  ]
})

export class EmployeeComponent implements OnInit {
  srcSword = 'https://png2.kisspng.com/sh/411d5fd005bf61bafa5f9697b532fba4/L0KzQYm3U8I4N5Z8fZH0aYP2gLBuTfx2c5Yyi91Ed3Hve7b5Tf9jcV58edC2a3Xxf7PwTfFvaZxuhp98a4n6cb3yhgIudJpsReV9YYKwh7L5k702aZNmftVrYXK6RILqWb4yPWE6TaI8OEG4QoO5UMM5O2U8TaIBLoDxd1==/kisspng-luke-skywalker-obi-wan-kenobi-anakin-skywalker-lig-star-wars-5abafcbab741c9.1505503815222038347506.png';
  employees: Employee[] = [];
  index: number;
  show = false;

  constructor(private employeesService: EmployeesService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.employeesService.fetchData().subscribe((response) => {
      this.employees = response;
      console.log(response);
    });
  }

  clicked(index) {
    this.index = index;
    this.show = !this.show;
  }

  onDrop(event: CdkDragDrop<Employee[]>) {
    moveItemInArray(this.employees, event.previousIndex, event.currentIndex);
  }

}
