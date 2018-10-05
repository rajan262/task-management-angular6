import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { TaskStatisticsComponent } from './task-statistics/task-statistics.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'user', component: UsersComponent},
    {path: 'add-task', component: AddTaskComponent},
    {path: 'edit-task', component: EditTaskComponent},
    {path: 'statistics', component: TaskStatisticsComponent}
]

export const routing = RouterModule.forRoot(routes);