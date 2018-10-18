import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user.model';

const apiHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'bearer N0vk1rPHMBt9u7yHWNyPXEEFKDumB6'
  })
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ApiBaseUrl: string = 'http://172.16.13.16:8000'
  constructor(private http: HttpClient) { }

  listUsers() {
    return this.http.get<User[]>(this.ApiBaseUrl + '/accounts/list-user/');
  }
  
  login(email: string, password: string) {
    return this.http.post<any>(this.ApiBaseUrl + '/accounts/login/', {
      'email': email,
      'password': password
    }, apiHeaders)
  }

}
