import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { TaskStatisticsComponent } from './task-statistics/task-statistics.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'user', component: UsersComponent},
    {path: 'add-team', component: AddTeamComponent},
    {path: 'add-task', component: AddTaskComponent},
    {path: 'edit-task', component: EditTaskComponent},
    {path: 'statistics', component: TaskStatisticsComponent}
]

export const routing = RouterModule.forRoot(routes);