import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { MessageService } from '../message.service';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  tasks: Task[];
  displayedColumns: string[] = ["team", "assigned_to", "name", "description", "status", "deadline", "created", "delete", "edit"]
  constructor(private formBuilder: FormBuilder, private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks:Task[]) => {
      this.tasks = tasks;
    })

  }

  onDeleteTask(id:number): void {
    this.taskService.retrieveDeleteTask(id.toString(), 'delete').subscribe();
    this.tasks = this.tasks.filter(Task => Task.id != id)
  }

  onEditTask(id:number): void {
    localStorage.setItem('adminEditTaskId', id.toString());
    this.router.navigate(['edit-task']);
  }

  onAddTask() {
    this.router.navigate(['add-task']);

  }
  getTaskStatistics() {
    this.router.navigate(['statistics']);
  }

}
