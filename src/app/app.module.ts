import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Moment } from 'moment';


import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { NvListComponent } from './nv-list/nv-list.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { DuanChitietComponent } from './duan-chitiet/duan-chitiet.component';
import { HomeComponent } from './home/home.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DoipassComponent } from './doipass/doipass.component';
import { QuenpassComponent } from './quenpass/quenpass.component';

@NgModule({
    declarations: [
        AppComponent,
        DuanListComponent,
        DuanThemComponent,
        DuanSuaComponent,
        NvListComponent,
        NvThemComponent,
        NvSuaComponent,
        TaskListComponent,
        TaskThemComponent,
        TaskSuaComponent,
        DuanChitietComponent,
        HomeComponent,
        ThongkeComponent,
        DangnhapComponent,
        DangkyComponent,
        DoipassComponent,
        QuenpassComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
