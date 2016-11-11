import { Injectable, EventEmitter, Output } from '@angular/core';
import { Error } from '../models/error';

@Injectable()
export class ErrorService {
@Output()
errorOccurred = new EventEmitter<Error>();
  constructor() { }
handleError(error:any){
  const errorData = new Error(error.title, error.error.message);
  this.errorOccurred.emit(errorData);
  console.log(errorData);
}

}
