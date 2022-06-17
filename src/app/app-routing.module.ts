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
import { ThongkeComponent } from './thongke/thongke.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DoipassComponent } from './doipass/doipass.component';
import { QuenpassComponent } from './quenpass/quenpass.component';

import { BaoveGuard } from './baove.guard';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'duan/listDA', component: DuanListComponent , canActivate: [BaoveGuard],},
    { path: 'duan/themDA', component: DuanThemComponent , canActivate: [BaoveGuard],},
    { path: 'duan/suaDA/:id', component: DuanSuaComponent , canActivate: [BaoveGuard],},
    { path: 'duan/chitietDA/:id', component: DuanChitietComponent, canActivate: [BaoveGuard], },
    { path: 'nv/listXV', component: NvListComponent , canActivate: [BaoveGuard],},
    { path: 'nv/themXV', component: NvThemComponent , canActivate: [BaoveGuard],},
    { path: 'nv/suaXV/:id', component: NvSuaComponent , canActivate: [BaoveGuard],},
    { path: 'task/listTask', component: TaskListComponent , canActivate: [BaoveGuard],},
    { path: 'task/themTask', component: TaskThemComponent , canActivate: [BaoveGuard],},
    { path: 'task/suaTask/:id', component: TaskSuaComponent, canActivate: [BaoveGuard], },
    { path: 'thongke/tk', component: ThongkeComponent, canActivate: [BaoveGuard], },
    { path: 'dangnhap', component: DangnhapComponent },
    { path: 'dangky', component: DangkyComponent },
    {
        path: 'doipass',
        component: DoipassComponent,
        canActivate: [BaoveGuard],
    },
    {
        path: 'quenpass',
        component: QuenpassComponent,
        canActivate: [BaoveGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
