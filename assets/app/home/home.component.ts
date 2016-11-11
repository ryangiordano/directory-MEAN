import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService} from '../shared/services/employee.service';
import { Employee} from '../shared/models/employee';
import { EmployeeComponent} from '../employee/employee.component';
import { ErrorService} from '../shared/services/error.service';
import { Subscription } from 'rxjs/Subscription';

import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees:Employee[]=[];

  subscription:Subscription;
  constructor(private _employeeService: EmployeeService, private _errorService:ErrorService) { }


  ngOnInit() {
    this._employeeService.getEmployees().subscribe(
      employees=>{
        this._employeeService.employees = employees;
      },
      error=>console.error(error),
      // error=>this._errorService.handleError(error),
      ()=>console.log("completed")
    )
    this.subscription = this._employeeService.employees$.subscribe(
      employees=>{
        console.log(employees)
          this.employees = employees;
      },
      error=>{console.error(error)}
    );
  }

}
