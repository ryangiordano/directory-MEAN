import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeService} from '../shared/services/employee.service';
import { Router} from '@angular/router';
import { Employee } from '../shared/models/employee';
import { Observable} from 'rxjs/Observable';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {SearchFormComponent} from './search-form/search-form.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output()
  searchResults: Employee[] = [];

  search = new FormControl();
  form: FormGroup

  constructor(private _employeeService: EmployeeService) {
    this.search.valueChanges
      .debounceTime(1000)
      .distinctUntilChanged()
      .subscribe((search) => {
        const searchTerm = search;
        this._employeeService.searchEmployees(searchTerm)
          .subscribe(
          data => {
            // console.log(data)
            this.searchResults = data;
            this._employeeService.employees = data;
          },
          error => { console.error(error) },
          () => {
            console.log('Search Completed')
          }
          )
      })
  }



  searchEmployees() {

  }


  ngOnInit() {

  }

}
