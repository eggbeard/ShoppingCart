import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export enum ApiActionType {
  API_REQUEST_SUCCESS = 'API_REQUEST_SUCCESS',
  API_REQUEST_ERROR = 'API_REQUEST_ERROR'
}

export class ApiRequestSuccess implements Action {
  readonly type = ApiActionType.API_REQUEST_SUCCESS;

  constructor() {}
}

export class ApiRequestError implements Action {
  readonly type = ApiActionType.API_REQUEST_ERROR;

  constructor(public error: HttpErrorResponse) {}
}

export type ApiActions = 
  ApiRequestSuccess |
  ApiRequestError;