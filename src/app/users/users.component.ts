import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { MessageService } from '../message.service';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  tasks: Task[];
  user_id: string;
  displayedColumns: string[] = ["team", "assigned_to", "name", "description", "status", "deadline", "created", "edit"]

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.user_id = localStorage.getItem('user_id');
    this.taskService.getUserTask(this.user_id).subscribe((tasks:Task[]) => {
      this.tasks = tasks;
    });
   
  }

  onUserEditTask(task_id: string) {
    localStorage.setItem('userEditTaskId', task_id);
    this.router.navigate(['edit-task']);
  }

}


  