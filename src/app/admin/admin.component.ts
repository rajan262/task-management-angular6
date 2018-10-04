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
  // assigned_to = models.ForeignKey(get_user_model(), blank=True, null=True, related_name='task_user')
  //   name = models.CharField(max_length=100)
  //   description = models.TextField(max_length=1000)
  //   status = models.PositiveSmallIntegerField(choices=STATUS_CHOICES, default=0)
  //   deadline = models.DateField()
  //   created = models.DateTimeField(auto_now_add=True)
  constructor(private formBuilder: FormBuilder, private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks:Task[]) => {
      this.tasks = tasks;
    })

  }

  onDeleteTask(id:number): void {
    this.taskService.deleteTask(id).subscribe();
    this.tasks = this.tasks.filter(Task => Task.id != id)
  }
  onAddTask() {

  }

}
