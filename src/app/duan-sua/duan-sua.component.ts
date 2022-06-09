import { Component, OnInit } from '@angular/core';
import { Leader } from '../leader';
import { Inhanvien } from '../inhanvien';
import { NhanvienService } from '../nhanvien.service';
import { DataService } from '../data.service';
import { DuanService } from '../duan.service';
import { LeaderService } from '../leader.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-duan-sua',
    templateUrl: './duan-sua.component.html',
    styleUrls: ['./duan-sua.component.css']
})
export class DuanSuaComponent implements OnInit {
    projectName: any;
    projectDate: any;
    projectPrice: any;
    projectLeader: any;
    projectMember: any;

    project: any;

    listLeader: Leader[] = [];
    listNhanVien: Inhanvien[] = [];

    constructor(
        private LeaderService: LeaderService,
        private NhanvienService: NhanvienService,
        private DuanService: DuanService,
        private DataService: DataService,
        private Router: Router
    ) { }

    ngOnInit(): void {
        this.listLeader = this.LeaderService.getAllLeader();
        // this.listNhanVien = this.NhanVienService.getAll();
        this.NhanvienService.getDataNV().subscribe((data: any) => {
            this.listNhanVien = data.map((item: any) => {
                return {
                    ...item,
                    id: parseInt(item.id),
                };
            });
        });
        this.project = this.DataService.getData();
        this.projectName = this.project.tenDuAn;
        this.projectDate = this.project.ngayStart;
        this.projectPrice = this.project.tien;
        this.projectLeader = this.project.leader;
        this.projectMember = this.project.thanhvien.map((item: any) =>
            parseInt(item)
        );
    }

    xuly(data: any) {
        data = {
            id: parseInt(this.project.id),
            tenDuAn: data.projectName,
            ngayStart: data.projectDate,
            tien: data.projectPrice,
            leader: data.projectLeader,
            thanhvien: data.projectMember,
        };

        this.DuanService.editDA(data);
        alert('Cập nhật dự án thành công');
        this.Router.navigate(['/duan/listDA']);
    }

}
