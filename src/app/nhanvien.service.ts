import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inhanvien } from './inhanvien';

@Injectable({
    providedIn: 'root'
})
export class NhanvienService {

    listNhanVien: Inhanvien[] = [
        { id: 1, fullname: 'Nguyễn Bá Đạo', ngaysinh: '2001-1-3', phai: true, khuvuc: 'Bắc' },
        { id: 2, fullname: 'Phạm Kỷ Luật', ngaysinh: '2001-5-6', phai: true, khuvuc: 'Bắc' },
        { id: 3, fullname: 'Mai Thanh Toán', ngaysinh: '2992-6-15', phai: false, khuvuc: 'Nam' },
        { id: 4, fullname: 'Cao Thị Chót Vót', ngaysinh: '2002-8-19', phai: false, khuvuc: 'Nam' },
        { id: 5, fullname: 'Nguyễn Xuân Bách', ngaysinh: '2002-11-19', phai: true, khuvuc: 'Nam' },
    ];
    private url = 'http://localhost:5000/nhanVien';
    static id: any;

    constructor(private http: HttpClient) { }

    getAllNV() {
        return this.listNhanVien;
    }

    getDataNV() {
        return this.http.get(this.url);
    }

    getSingleNV(id: number) {
        // return this.listNhanVien.find(nv => nv.id == id)
        return this.http.get(`${this.url}/${id}`);
    }

    addNV(nv: Inhanvien = <Inhanvien>{}) {
        const params = new HttpParams({
            fromObject: { ...nv },
        });

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });

        return this.http.post(this.url, params, { headers }).subscribe((data) => {
            // console.log(data);
        });
        // this.list.push(nv);
    }

    editNV(item: Inhanvien = <Inhanvien>{}) {
        const params = new HttpParams({
            fromObject: { ...item },
        });

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });

        return this.http
            .put(`${this.url}/${item.id}`, params, { headers })
            .subscribe((data) => {
                // console.log(data);
            });

        // let index = this.list.findIndex(
        //   (currentValue) => currentValue.id == item.id
        // );
        // this.list[index] = item;
    }

    deleteNV(id: number = 0) {
        return this.http
            .delete(`${this.url}/${id}`)
            .subscribe(() => console.log('Deleted'));

        // let index = this.list.findIndex((currentValue) => {
        //   return currentValue.id == id;
        // });
        // console.log(index);
        // this.list.splice(index, 1);
    }
}
