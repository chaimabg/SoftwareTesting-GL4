import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {User} from '../models/User';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:8080/products';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
