import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
@Input() placeholder: string;
@Input() delay: number=300;
@Output() value:EventEmitter<any> = new EventEmitter();

inputValue:string;
  constructor() { }

  ngOnInit() {
  }

}
