import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './app.route';
import { HighlightDirective } from './highlight.directive'
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { TaskStatisticsComponent } from './task-statistics/task-statistics.component';
import { LoginComponent } from './login/login.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { DateTransformPipe } from './date-transform.pipe';
import { StatusTransformPipe } from './status-transform.pipe';
import { TaskCountPipe } from './task-count.pipe';
import { TaskNavComponent } from './task-nav/task-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import { TaskTableComponent } from './task-table/task-table.component';
import { TaskToolbarComponent } from './task-toolbar/task-toolbar.component';

@NgModule({
  declarations: [
    HighlightDirective,
    AppComponent,
    AdminComponent,
    UsersComponent,
    TaskStatisticsComponent,
    LoginComponent,
    AddTaskComponent,
    EditTaskComponent,
    DateTransformPipe,
    StatusTransformPipe,
    TaskCountPipe,
    TaskNavComponent,
    TaskDashboardComponent,
    TaskTableComponent,
    TaskToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
