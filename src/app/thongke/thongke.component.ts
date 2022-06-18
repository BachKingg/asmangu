import { Component, Input, OnInit } from '@angular/core';
import { Iduan } from '../iduan';
import { Inhanvien } from '../inhanvien';
import { Itask } from '../itask';
import { DuanService } from '../duan.service';
import { NhanvienService } from '../nhanvien.service';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Team } from '../team';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
    selector: 'app-thongke',
    templateUrl: './thongke.component.html',
    styleUrls: ['./thongke.component.css']
})
export class ThongkeComponent implements OnInit {
    listDuAn: any;
    arrayPrice: string | number | undefined;

    constructor(
        private DuanService: DuanService,
        private NhanvienService: NhanvienService,
        private TaskService: TaskService,
        private Router: Router
    ) {
        // this.Router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    listNv: Inhanvien[] = [];
    listNhanVien: Inhanvien[] = [];
    listDA: Iduan[] = [];
    @Input() totalPrice: any = 0;
    @Input() totalTask: any = 0;
    @Input() totalDuan: any = 0;
    @Input() totalNorth: any = 0;
    @Input() totalSouth: any = 0;
    @Input() totalMiddle: any = 0;

    

    nFormatter(num: number) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + ' Tỷ';
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + ' Triệu';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + ' Nghìn';
        }
        return num;
    }

    ngOnInit(): void {
        this.getData();
    }


    getData() {

        this.NhanvienService.getDataNV().subscribe((data: any) => {
            data.map((_element: any) => {
                if (_element.phai == true || _element.phai == 'true') {
                    _element.phai = true;
                } else {
                    _element.phai = false;
                }
            });
            this.listNhanVien = data;
        });
        this.NhanvienService.getDataNV().subscribe((item: any) => {
            this.listNv = item;
        });
        this.DuanService.getDataDA().subscribe((data: any) => {
            this.totalDuan = data.length;
            this.listDuAn = data;
        });
        this.DuanService.getDataDA().subscribe((data: any) => {
            data.forEach((_item: any) => {
                this.totalPrice = this.totalPrice + parseInt(_item.tien);
            });
            this.totalPrice = this.nFormatter(this.totalPrice);
        });
        this.TaskService.getDataTask().subscribe((data: any) => {
            this.totalTask = data.length;
        }
        );
        this.NhanvienService.getDataNV().subscribe((data: any) => {
            this.totalNorth = this.listNhanVien.filter((item: any) => item.khuvuc == 'Bắc');
            this.totalSouth = this.listNhanVien.filter((item: any) => item.khuvuc == 'Nam');
            this.totalMiddle = this.listNhanVien.filter((item: any) => item.khuvuc == 'Trung');
        }
            , (error: any) => {
                console.log(error);
            }
        );


        this.TaskService.getDataTask().subscribe((data: any) => {
            this.totalTask = data.length;
        }
            , (error: any) => {
                console.log(error);
            }
        );



    }
}
