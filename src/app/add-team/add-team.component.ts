import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TaskService } from '../task.service';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  addTeamForm: FormGroup;
  userList: User[];
  constructor(private router: Router, private formBuilder: FormBuilder, private taskService: TaskService, private authService: AuthService) { }

  ngOnInit() {
    this.addTeamForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'description': [''],
      'members': ['', Validators.required]
    })
    this.authService.listUsers().subscribe((users: User[]) => {
      this.userList = users;
    })
  }

  teamSubmit() {
    this.taskService.addTeam(this.addTeamForm.value).subscribe();
    this.router.navigate(['admin']);
  }



}
