import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TaskService } from '../task.service';
import { AuthService } from '../auth.service';
import { Task } from '../task.model';
import { User } from '../user.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  editTaskForm: FormGroup;
  userList: User[];
  adminUser: boolean = localStorage.getItem('adminUser') == "True"?true:false;
  // userList: User[];
  // userForm: FormGroup;
  // TODO = 0
  //   IN_PROGRESS = 1
  //   DONE = 2
  //   COMPLETED = 3

  //   STATUS_CHOICES = (
  //       (TODO, 'To Do'),
  //       (IN_PROGRESS, 'In Progress'),
  //       (DONE, 'Done'),
  //       (COMPLETED, 'Completed'),
  //   )
  statusList = [
    {id: 0, text: 'To Do'},
    {id: 1, text: 'In Progress'},
    {id: 2, text: 'Done'},
  ]
  constructor(private formBuilder: FormBuilder, private taskService: TaskService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.editTaskForm = this.formBuilder.group({
      'id': [],
      'name': ['', Validators.required],
      // 'assigned_to': [''],
      'assigned_to': this.formBuilder.group({
        'id': ['', Validators.required],
        'email': [''],
        'full_name': ['']
      }),
      'description': [''],
      'status': ['', Validators.required],
      'deadline': ['', Validators.required],
      'created': ['']
    });

    if (this.adminUser) {
      this.statusList.push(
        {id: 3, text: 'Completed'}
      )
    }
    let editTaskId = this.adminUser?localStorage.getItem('adminEditTaskId'):localStorage.getItem('userEditTaskId')
    this.taskService.retrieveDeleteTask(editTaskId, 'retrieve').subscribe((task:Task) => {
      this.editTaskForm.setValue(task);
    })

    this.authService.listUsers().subscribe((users:User[]) => {
      this.userList = users;
    })
  
  }

  adminEditTaskSubmit() {
    console.log(this.editTaskForm.value);
    this.taskService.updateTask(this.editTaskForm.value).subscribe();
    if (this.adminUser) {
    this.router.navigate(['admin']);
    }
    else {
      this.router.navigate(['user']);
    }
  }

}
