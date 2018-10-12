import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, 
  MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
  MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule,
  MatDatepickerModule, MatNativeDateModule, MatInputModule, MatRadioModule,
  MatOptionModule, MatSelectModule, MatSlideToggleModule, MatProgressSpinnerModule 
} from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
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
import { LayoutModule } from '@angular/cdk/layout';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import { TaskTableComponent } from './task-table/task-table.component';
import { TaskToolbarComponent } from './task-toolbar/task-toolbar.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    TaskDashboardComponent,
    TaskTableComponent,
    TaskToolbarComponent,
    AddTeamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
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
    MatSortModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
