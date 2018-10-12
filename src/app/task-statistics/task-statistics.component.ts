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
  taskStatistics: TaskStatistics[];
  userTaskStatistics: UserTaskStatistics[];
  taskStatisticsComment: string;
  displayedColumns: string[] = ["total_tasks", "todo_tasks_percent", "in_progress_tasks_percent", "done_tasks_percent", "completed_tasks_percent"]
  userDisplayedColumns = [ 'assigned_to', 'total_tasks_assigned', 'tasks_to_do', 'tasks_in_progress', 'tasks_done', 'tasks_completed']

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTaskStatistics().subscribe((data:TaskStatistics) => {
      this.taskStatistics = [data];
    })
    this.taskService.getUserTaskStatistics().subscribe((userTaskStatistics: UserTaskStatistics[]) => {
      this.userTaskStatistics = userTaskStatistics;
    })
  }
  

}
