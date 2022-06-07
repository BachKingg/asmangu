import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { DuanChitietComponent } from './duan-chitiet/duan-chitiet.component';
import { NvListComponent } from './nv-list/nv-list.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'duan/listDA', component: DuanListComponent },
    { path: 'duan/themDA', component: DuanThemComponent },
    { path: 'duan/suaDA/:id', component: DuanSuaComponent },
    { path: 'duan/chitietDA/:id', component: DuanChitietComponent },
    { path: 'nv/listXV', component: NvListComponent },
    { path: 'nv/themXV', component: NvThemComponent },
    { path: 'nv/suaXV/:id', component: NvSuaComponent },
    { path: 'task/listTask', component: TaskListComponent },
    { path: 'task/themTask', component: TaskThemComponent },
    { path: 'task/suaTask/:id', component: TaskSuaComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
