import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'task-management';
  loginForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {

  }
  
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
          this.router.navigate(['admin']);

        }
        else {
          localStorage.setItem('adminUser', 'False')
          localStorage.setItem('logged', 'True');
          this.router.navigate(['user']);
        }
      });
    
  }
  
}
