import { Component, OnInit } from '@angular/core';
import { NhanvienService } from '../nhanvien.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nv-them',
    templateUrl: './nv-them.component.html',
    styleUrls: ['./nv-them.component.css']
})
export class NvThemComponent implements OnInit {

    constructor(
        private NhanvienService: NhanvienService,
        private router: Router

    ) { }

    staffFullName: any;
    staffBirth: any;
    staffGender: any;
    staffArea: any;
    allNhanVien: any;

    ngOnInit(): void {
        this.NhanvienService.getDataNV().subscribe((data: any) => {
            this.allNhanVien = data;
        });
    }

    xuly(data: any) {
        data = {
            id: parseInt(this.allNhanVien[this.allNhanVien.length - 1].id) + 1,
            fullname: this.staffFullName,
            ngaysinh: this.staffBirth,
            phai: this.staffGender === 'true' ? true : false,
            khuvuc: this.staffArea,
        };
        this.NhanvienService.addNV(data);
        alert('Thêm nhân viên thành công');
        this.router.navigate(['/nv/listXV']);
    }

}
