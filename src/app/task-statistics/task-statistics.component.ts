import { Component, OnInit } from '@angular/core';

import { TaskStatistics } from '../task-statistics.model';
import { UserTaskStatistics } from '../user-statistics.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-statistics',
  templateUrl: './task-statistics.component.html',
  styleUrls: ['./task-statistics.component.css']
})
export class TaskStatisticsComponent implements OnInit {
  taskStatistics: TaskStatistics;
  userTaskStatistics: UserTaskStatistics[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTaskStatistics().subscribe((data:TaskStatistics) => {
      this.taskStatistics = data;
    })
    this.taskService.getUserTaskStatistics().subscribe((userTaskStatistics: UserTaskStatistics[]) => {
      this.userTaskStatistics = userTaskStatistics;
    })
  }

}
