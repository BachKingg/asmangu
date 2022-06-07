import { Component, OnInit } from '@angular/core';
import { Iduan } from '../iduan';
import { DuanService } from '../duan.service';
import { Inhanvien } from '../inhanvien';
import { NhanvienService } from '../nhanvien.service';

@Component({
    selector: 'app-task-them',
    templateUrl: './task-them.component.html',
    styleUrls: ['./task-them.component.css']
})
export class TaskThemComponent implements OnInit {

    constructor(
        private nvService: NhanvienService,
        private daService: DuanService
    ) { }

    listDuAn: Iduan[] = [];
    listNhanVien: Inhanvien[] = [];


    ngOnInit(): void {
        this.listNhanVien = this.nvService.getAllNV();
        this.listDuAn = this.daService.getAllDA();
    }

}
