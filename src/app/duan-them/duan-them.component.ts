import { Component, OnInit } from '@angular/core';
import { Inhanvien } from '../inhanvien';
import { NhanvienService } from '../nhanvien.service';

@Component({
    selector: 'app-duan-them',
    templateUrl: './duan-them.component.html',
    styleUrls: ['./duan-them.component.css']
})
export class DuanThemComponent implements OnInit {

    // dsXV: Inhanvien[] = [
    //     { id: 1, ho: 'Nguyễn Bá', ten: 'Đạo', ngaysinh: '2001-1-3', phai: true, khuvuc: 'Bắc' },
    //     { id: 2, ho: 'Phạm Kỷ', ten: 'Luật', ngaysinh: '2001-5-6', phai: true, khuvuc: 'Bắc' },
    //     { id: 3, ho: 'Mai Thanh', ten: 'Toán', ngaysinh: '2992-6-15', phai: false, khuvuc: 'Nam' },
    //     { id: 4, ho: 'Cao Thị Chót', ten: 'Vót', ngaysinh: '2002-8-19', phai: false, khuvuc: 'Nam' },
    //     { id: 5, ho: 'Nguyễn Xuân', ten: 'Bách', ngaysinh: '2002-11-19', phai: true, khuvuc: 'Nam' },
    // ];

    constructor(
        private nvService: NhanvienService
    ) { }

    listNhanVien: Inhanvien[] = [];

    ngOnInit(): void {
        // this.listNhanVien  = this.nvService.getNhanVien();        
    }

}
