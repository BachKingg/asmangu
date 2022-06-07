import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NhanvienService } from '../nhanvien.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nv-sua',
    templateUrl: './nv-sua.component.html',
    styleUrls: ['./nv-sua.component.css']
})
export class NvSuaComponent implements OnInit {

    constructor(
        private DataService: DataService,
        private NhanvienService: NhanvienService,
        private router: Router,
    ) { }


    staffFullName: any;
    staffBirth: any;
    staffGender: any;
    staffArea: any;

    nv: any;

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this.nv = this.DataService.getData();
        this.staffFullName = this.nv.fullname;
        this.staffBirth = this.nv.ngaysinh;
        this.staffGender = this.nv.phai;
        this.staffArea = this.nv.khuvuc;
    }

    xuly(data: any) {
        console.log(data);
        data = {
            id: parseInt(this.nv.id),
            fullname: data.staffFullName,
            ngaysinh: data.staffBirth,
            phai: data.staffGender,
            khuvuc: data.staffArea,
        };

        this.NhanvienService.editNV(data);
        alert('Sửa nhân viên thành công');
        this.router.navigate(['nv/listXV']);

    }
}
