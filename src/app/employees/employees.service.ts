import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {Employee} from './employee.model';


@Injectable()
export class EmployeesService {
  showSpinner: Subject<boolean> = new Subject();
  private url = 'https://swapi.co/api/people/';

  constructor(private http: HttpClient) {
  }

  fetchData(): Observable<Employee[]> {
    this.showSpinner.next(true);
    const header = new HttpHeaders({'Content-Type':  'application/json'});
    return this.http.get(this.url, {headers: header}).pipe(map((response) => {
      this.showSpinner.next(false);
      return <Employee[]>response['results'];
    }))
    ;
  }
}
