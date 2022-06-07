import { Component, OnInit } from '@angular/core';
import { Inhanvien } from '../inhanvien';
import { NhanvienService } from '../nhanvien.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
    selector: 'app-nv-list',
    templateUrl: './nv-list.component.html',
    styleUrls: ['./nv-list.component.css']
})
export class NvListComponent implements OnInit {

    constructor(
        private NhanvienService: NhanvienService,
        private DataService: DataService,
        private router: Router
    ) { }

    listNhanVien: Inhanvien[] = [];

    ngOnInit(): void {
        // this.listNhanVien = this.nvService.getAllNV();
        this.getData();
    }
    getData() {
        console.log('Loading data');
        this.NhanvienService.getDataNV().subscribe((data: any) => {
            data.map((_element: any) => {
                if (_element.phai == true || _element.phai == 'true') {
                    _element.phai = true;
                    // console.log(_element.ten + ' ' + _element.phai);
                } else {
                    _element.phai = false;
                }
            });
            this.listNhanVien = data;
        });
    }

    editNV(nv: any) {
        this.DataService.sendData(nv);
        this.router.navigate([`nv/suaXV/${nv.id}`]);
    }

    async deleteNV(id: number) {
        if (confirm('Bạn có chắc chắn muốn xóa nhân viên này không ?')) {
            this.NhanvienService.deleteNV(id);
            setTimeout(() => {
                this.getData();
            }, 500);
            // let myPromise = new Promise<void>((resolve, reject) => {
            //   this.NhanVienService.deleteItem(id);
            //   resolve();
            // });
            // myPromise
            //   .then(() => {
            //     console.log('Get data');
            //     this.getData();
            //   })
            //   .catch((err) => {
            //     console.log(err);
            //   });
        }
    }

}
