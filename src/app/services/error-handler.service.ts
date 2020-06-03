import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  handleError(error: HttpErrorResponse | any){
      let errorMsg: String;
      if (error.error instanceof ErrorEvent) {
        errorMsg = error.error.message;
      } else {
        errorMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
      }

    return throwError(errorMsg)
  }
}
