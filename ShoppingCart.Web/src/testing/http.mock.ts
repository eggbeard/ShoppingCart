import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class MockHttpClient extends HttpClient {

  constructor() {

    super({ handle: () => {
      return of(new HttpResponse<any>());
    }});
  }
  get<T>(): Observable<T> {
    return of({} as T);
  }

  patch<T>(): Observable<T> {
    return of({} as T);
  }

  post<T>(): Observable<T> {
    return of({} as T);
  }

  put<T>(): Observable<T> {
    return of({} as T);
  }

  delete<T>(): Observable<T> {
    return of({} as T);
  }
}
