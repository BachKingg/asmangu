import { Component, OnInit } from '@angular/core';
import { Leader } from '../leader';
import { Inhanvien } from '../inhanvien';
import { DuanService } from '../duan.service';
import { LeaderService } from '../leader.service';
import { NhanvienService } from '../nhanvien.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-duan-them',
    templateUrl: './duan-them.component.html',
    styleUrls: ['./duan-them.component.css']
})
export class DuanThemComponent implements OnInit {

    projectName: any;
    projectDate: any;
    projectPrice: any;
    projectLeader: any;
    projectMember: any;

    constructor(
        private LeaderService: LeaderService,
        private NhanvienService: NhanvienService,
        private DuanService: DuanService,
        private Router: Router,

    ) { }
    listLeader: Leader[] = [];
    listNhanVien: Inhanvien[] = [];
    allProject: any;


    ngOnInit(): void {

        this.LeaderService.getDataLeader().subscribe(
            (response: any) => {
                this.listLeader = response;
            },
            (error: any) => {
                console.log(error);
            }
        );
        this.NhanvienService.getDataNV().subscribe(
            (response: any) => {
                this.listNhanVien = response;
            },
            (error: any) => {
                console.log(error);
            }
        );
        this.DuanService.getDataDA().subscribe(
            (response: any) => {
                this.allProject = response;
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    xuly(data: any) {
        // let allProject = this.DuAnService.getAll();
        data = {
            id: parseInt(this.allProject[this.allProject.length - 1].id) + 1,
            tenDuAn: this.projectName,
            ngayStart: this.projectDate,
            tien: parseInt(this.projectPrice),
            leader: this.projectLeader,
            thanhvien: this.projectMember,
        };
        console.log('Data: ', data);
        this.DuanService.addDA(data);
        alert('Thêm dự án thành công');
        this.Router.navigate(['duan/listDA']);
    }
}
