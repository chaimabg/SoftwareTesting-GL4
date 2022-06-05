import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8080/users';
  constructor(private http: HttpClient) { }
    getUser(): Observable<any[]> {
      return this.http.get<any[]>(this.url);
    }
  addUser(user: any): Observable<any> {
    const formData = {
      firstName : user.fullName,
      lastName : user.lastName,
      identifier : user.identifier,
      emailAddress : user.emailAddress,
      password :user.password
    }

    const req = new HttpRequest('POST', this.url, formData);
    return this.http.request(req);
  }
  login(user: any): Observable<any> {
    const formData = {
      emailAddress : user.emailAddress,
      password :user.password
    };
    const req = new HttpRequest('POST', 'http://localhost:8080/auth', formData);
    return this.http.request(req);
  }
}
