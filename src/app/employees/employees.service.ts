import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable()
export class EmployeesService {
  private url = 'https://swapi.co/api/people/';

  constructor(private http: HttpClient) {
  }

  fetchData() {
    const header = new HttpHeaders({'Content-Type':  'application/json'});
    return this.http.get(this.url, {headers: header}).pipe(map((response) => {
      return response['results'];
    }))
    ;
  }

  fetchDataById( id: number): Observable<any> {
    return this.http.get(this.url + id);
  }
}
