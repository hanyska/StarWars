import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  srcSword = 'https://png2.kisspng.com/sh/411d5fd005bf61bafa5f9697b532fba4/L0KzQYm3U8I4N5Z8fZH0aYP2gLBuTfx2c5Yyi91Ed3Hve7b5Tf9jcV58edC2a3Xxf7PwTfFvaZxuhp98a4n6cb3yhgIudJpsReV9YYKwh7L5k702aZNmftVrYXK6RILqWb4yPWE6TaI8OEG4QoO5UMM5O2U8TaIBLoDxd1==/kisspng-luke-skywalker-obi-wan-kenobi-anakin-skywalker-lig-star-wars-5abafcbab741c9.1505503815222038347506.png';

  constructor() { }

  ngOnInit() {
  }

}
