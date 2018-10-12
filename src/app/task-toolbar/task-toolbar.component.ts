import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-task-toolbar',
  templateUrl: './task-toolbar.component.html',
  styleUrls: ['./task-toolbar.component.css'],
  animations: [
    trigger('changeState', [
      state('selected', style({
        backgroundColor: 'red'
      })),
      transition('* <=> selected', animate('3s')),
    ])
  ]
})
export class TaskToolbarComponent implements OnInit {
  @Input() logged;
  @Input() adminUser;
  currentState: string = 'unselected';
  constructor(private router: Router, private messageService: MessageService) { }

  ngOnInit() {
  }

  addTeam() {
    this.router.navigate(['add-team']);
  }

  addTask() {
    this.currentState = 'selected';
    this.router.navigate(['add-task']);
  }

  getTaskStatistics() {
    this.router.navigate(['statistics']);
  }

  logout() {
    localStorage.clear();
    this.messageService.updateLocalStorage('False', 'False');
    this.router.navigate(['']);
  }

}
