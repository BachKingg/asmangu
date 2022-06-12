import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Itask } from '../itask';
import { Iduan } from '../iduan';
import { Inhanvien } from '../inhanvien';
import { TaskService } from '../task.service';
import { DuanService } from '../duan.service';
import { NhanvienService } from '../nhanvien.service';
import { DataService } from '../data.service';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    listTask: Itask[] = [];
    listNV: Inhanvien[] = [];
    listDuAn: Iduan[] = [];

    constructor(
        private TaskService: TaskService,
        private NhanvienService: NhanvienService,
        private DuanService: DuanService,
        private DataService: DataService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this.TaskService.getDataTask().subscribe((data: any) => {
            this.listTask = data;
        });
        this.NhanvienService.getDataNV().subscribe((data: any) => {
            this.listNV = data;
        });
        this.DuanService.getDataDA().subscribe((data: any) => {
            this.listDuAn = data;
        });
    }

    editTask(task: any) {
        this.DataService.sendData(task);
        this.router.navigate([`/task/suaTask/${task.id}`]);
    }

    deleteTask(id: number) {
        confirm('Bạn có chắc chắn muốn xóa task này không ?') &&
            this.TaskService.deleteTask(id);
        setTimeout(() => {
            this.getData();
        }, 500);
    }

}
