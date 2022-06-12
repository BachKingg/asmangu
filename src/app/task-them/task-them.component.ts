import { Component, OnInit } from '@angular/core';
import { Iduan } from '../iduan';
import { Inhanvien } from '../inhanvien';
import { DuanService } from '../duan.service';
import { NhanvienService } from '../nhanvien.service';
import { TaskService } from '../task.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-task-them',
    templateUrl: './task-them.component.html',
    styleUrls: ['./task-them.component.css']
})
export class TaskThemComponent implements OnInit {

    constructor(
        private NhanvienService: NhanvienService,
        private DuanService: DuanService,
        private TaskService: TaskService,
        private Router: Router
    ) { }

    frm1!: FormGroup;

    listDuAn: Iduan[] = [];
    listNhanVien: Inhanvien[] = [];
    allTask: any;

    ngOnInit(): void {
        this.DuanService.getDataDA().subscribe((data: any) => {
            this.listDuAn = data;
        });
        this.NhanvienService.getDataNV().subscribe((data: any) => {
            this.listNhanVien = data;
        });
        this.TaskService.getDataTask().subscribe((data: any) => {
            this.allTask = data;
        });

        this.frm1 = new FormGroup({
            taskName: new FormControl('Dự án XYZ', [
                Validators.required,
                Validators.minLength(4),
            ]),
            taskDescription: new FormControl('', [
                Validators.required,
            ]),
            taskProject: new FormControl('1', Validators.required),
            taskOwner: new FormControl('1', Validators.required),
            taskPriority: new FormControl('1', Validators.required),
            taskStatus: new FormControl('1', Validators.required),
        });
        console.log(this.frm1);
    }

    xuly(data: any) {
        data = {
            id: this.allTask[this.allTask.length - 1].id + 1,
            tenTask: data.taskName,
            duAnID: data.taskProject,
            nhanvienID: data.taskOwner,
            moTa: data.taskDescription,
            status: data.taskStatus,
            priority: data.taskPriority,
        };
        this.TaskService.addTask(data);
        alert('Thêm nhiệm vụ thành công');
        this.Router.navigate(['/task/listTask']);

    }

}
