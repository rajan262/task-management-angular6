import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from './message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Task Management';
  subscription: Subscription;
  logged: string = localStorage.getItem('logged')?localStorage.getItem('logged'):"False";
  adminUser: string = localStorage.getItem('adminUser')?localStorage.getItem('adminUser'):"False";
  
  constructor(private router: Router, private messageService: MessageService) { 
      
  }

  ngOnInit() {
    this.messageService.getLocalStorage().subscribe(localData => {
      this.logged = localData.logged;
      this.adminUser = localData.adminUser;
    })
    if (this.logged == "True") {
      if(this.adminUser == "True") {
        this.router.navigate(['admin']);
      }
      else {
        this.router.navigate(['user']);
      }
    }
    else {
      this.router.navigate(['login']);
    }
  }
  // logout() {
  //   console.log('Logging out');
  //   localStorage.setItem('logged', "False");
  //   this.logged = "False";
  //   this.router.navigate(['']);
   
  // }

}
  
