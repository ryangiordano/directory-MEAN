import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';
import { User } from '../models/user';
import { Employee} from '../models/employee';

@Injectable()
export class EmployeeService {

   employeesSource = new BehaviorSubject<Employee[]>(null);

 employees: Employee[]= [];
employees$ = this.employeesSource.asObservable();

  constructor(private _http:Http) { }
  getEmployees(){
    return this._http.get('/employees-api')
    .map(response=>{
      const data = response.json().obj;
      console.log("mapping");
      let objs:any[]=[];
      for(let i =0; i<data.length; i++){
          let employee = new Employee(data[i].firstName, data[i].lastName,data[i].email, data[i].phone,data[i].title,data[i].branch,data[i].picture,data[i]._id);
          objs.push(employee);
      };
      this.employeesSource.next(objs);
      return objs;
    })
    .catch(error => Observable.throw(error.json()));


  }
  searchEmployees(string:string){
    const body = JSON.stringify({string:string});
    const headers = new Headers({'content-type': 'application/json'});

    return this._http.post('/employees-api',body,{headers:headers})
    .map(response=>{
      const data = response.json().obj;
      let objs:any[]=[];
      for(let i = 0; i<data.length;i++){
        let employee = new Employee(data[i].firstName, data[i].lastName,data[i].email, data[i].phone,data[i].title,data[i].branch,data[i].picture,data[i]._id);
        objs.push(employee);
      };
      this.employeesSource.next(objs);
      return objs;
    })
    .catch(error=>Observable.throw(error.json()));
  }
}
