import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { MessageService } from '../message.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  logged: string = localStorage.getItem('logged')?localStorage.getItem('logged'):"False";
  adminUser: string = localStorage.getItem('adminUser')?localStorage.getItem('adminUser'):"False";

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private messageService: MessageService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]  
    });
  }

  loginSubmit() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(logindetails => {
        if (this.loginForm.value.email == 'rajansingh.uiet@yahoo.com') {
          localStorage.setItem('adminUser', 'True');
          localStorage.setItem('logged', 'True');
          this.messageService.updateLocalStorage('True', 'True');
          this.router.navigate(['admin']);

        }
        else {
          localStorage.setItem('adminUser', 'False')
          localStorage.setItem('logged', 'True');
          localStorage.setItem('user_id', logindetails.id.toString());
          this.messageService.updateLocalStorage('False', 'True');
          this.router.navigate(['user']);
        }
      });
    
  }

}
