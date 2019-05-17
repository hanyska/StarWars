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
  srcSword = 'https://png2.kisspng.com/sh/411d5fd005bf61bafa5f9697b532fba4/L0KzQYm3U8I4N5Z8fZH0aYP2gLBuTfx2c5Yyi91Ed3Hve7b5Tf9jcV58edC2a3Xxf7PwTfFvaZxuhp98a4n6cb3yhgIudJpsReV9YYKwh7L5k702aZNmftVrYXK6RILqWb4yPWE6TaI8OEG4QoO5UMM5O2U8TaIBLoDxd1==/kisspng-luke-skywalker-obi-wan-kenobi-anakin-skywalker-lig-star-wars-5abafcbab741c9.1505503815222038347506.png';
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
        console.log(response);
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
