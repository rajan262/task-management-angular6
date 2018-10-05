import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { apiHeaders } from './request.header';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  ApiBaseUrl: string = 'http://localhost:8000'
  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }


  getTasks() {
    return this.http.get<Task[]>(this.ApiBaseUrl + '/tasks/task-list/', apiHeaders);
  }

  getUserTask(user_id: string) {
    let url = this.ApiBaseUrl + '/tasks/user-task-list/?user_id=' + user_id;
    return this.http.get<Task[]>(url, apiHeaders);
  }

  retrieveDeleteTask(task_id: string, request_type: string) {
    let url = this.ApiBaseUrl + '/tasks/retrieve-delete-task/?id=' + task_id; 
    if (request_type == 'retrieve') {
      return this.http.get<Task>(url, apiHeaders);
    }
    else {
    return this.http.delete(url, apiHeaders);
    }
  }

  createTask(taskData:any) {
    let url = this.ApiBaseUrl + '/tasks/create-task/';
    return this.http.post(url, taskData, apiHeaders);

  }

  updateTask(task:Task) {
    let url = this.ApiBaseUrl + '/tasks/update-task/';
    return this.http.put(url, task, apiHeaders);
  }

  getTaskStatistics() {
    let url = this.ApiBaseUrl + '/tasks/task-statistics';
    return this.http.get(url, apiHeaders);
  }

}
