import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { apiHeaders } from './request.header';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  ApiBaseUrl: string = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(this.ApiBaseUrl + '/tasks/task-list/', apiHeaders);
  }

  deleteTask(task_id: number) {
    let url = this.ApiBaseUrl + '/tasks/delete-task/?id=' + task_id; 
    return this.http.delete(url, apiHeaders);
  }
}
