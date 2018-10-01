import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  ApiBaseUrl: string = 'http://localhost:8000'
  constructor(private http: HttpClient) { }
  
  login(email: string, password: string) {
    return this.http.post<any>(this.ApiBaseUrl + '/accounts/login/', {
      'email': email,
      'password': password
    }, apiHeaders)
  }

}
