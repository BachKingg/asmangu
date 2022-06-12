import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iduan } from '../iduan';
import { Inhanvien } from '../inhanvien';
import { DataService } from '../data.service';
import { DuanService } from '../duan.service';
import { NhanvienService } from '../nhanvien.service';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-task-sua',
    templateUrl: './task-sua.component.html',
    styleUrls: ['./task-sua.component.css']
})
export class TaskSuaComponent implements OnInit {

    constructor(
        private DuanService: DuanService,
        private TaskService: TaskService,
        private NhanvienService: NhanvienService,
        private DataService: DataService,
        private Router: Router
    ) { }

    listDuAn: Iduan[] = [];
    listNhanVien: Inhanvien[] = [];
    task: any;

    frm1!: FormGroup;

    ngOnInit(): void {
        this.DuanService.getDataDA().subscribe((data: any) => {
            this.listDuAn = data;
        });
        this.NhanvienService.getDataNV().subscribe((data: any) => {
            this.listNhanVien = data;
        });
        this.task = this.DataService.getData();
        // this.TaskService.getData().subscribe((data: any) => {
        //   this.task = data;
        // console.log(this.task);
        // });
        this.frm1 = new FormGroup({
            taskName: new FormControl(this.task.tenTask, [
                Validators.minLength(4),
                Validators.required,
            ]),
            taskDescription: new FormControl(this.task.moTa, [
                Validators.required,
            ]),
            taskProject: new FormControl(this.task.duAnID, Validators.required),
            taskOwner: new FormControl(this.task.nhanvienID, Validators.required),
            taskPriority: new FormControl(this.task.priority, Validators.required),
            taskStatus: new FormControl(this.task.status, Validators.required),
        });
    }

    xuly(data: any) {
        console.log(data);
        data = {
            id: parseInt(this.task.id),
            tenTask: data.taskName,
            duAnID: data.taskProject,
            nhanvienID: data.taskOwner,
            moTa: data.taskDescription,
            status: data.taskStatus,
            priority: data.taskPriority,
        };

        this.TaskService.editTask(data);
        alert('Sửa task thành công');
        this.Router.navigate(['/task/listTask']);
    }

}
