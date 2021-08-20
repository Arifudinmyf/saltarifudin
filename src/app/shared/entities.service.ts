import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Activity } from './entities';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  // Define API
  apiURL = 'https://react-my-burger-f1dc9-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) {}

  getChannels() {
    return this.http
      .get(this.apiURL + '/channels.json')
      .pipe(retry(1), catchError(this.handleError));
  }

  getActivities(): Observable<Activity> {
    return this.http
      .get<Activity>(this.apiURL + '/activities.json')
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
