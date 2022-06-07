import { Injectable } from '@angular/core';
import { Iduan } from './iduan';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class DuanService {

    listDuan: Iduan[] = [
        { id: 1, tenDuAn: 'Quản lý trại heo', ngayStart: '2022-03-01', tien: 67090900, leader: 1, thanhvien: [1, 3, 4] },
        { id: 2, tenDuAn: 'Cây xanh công viên', ngayStart: '2022-04-02', tien: 98599000, leader: 1, thanhvien: [1, 3, 4] },
        { id: 3, tenDuAn: 'Website Văn hóa Việt', ngayStart: '2022-04-15', tien: 35000000, leader: 2, thanhvien: [2, 4] },
        { id: 4, tenDuAn: 'Website Du lich Bụi', ngayStart: '2022-04-21', tien: 75500000, leader: 2, thanhvien: [2, 4] },
        { id: 5, tenDuAn: 'Quản lý nhà thuốc Vĩnh An', ngayStart: '2022-05-02', tien: 97999000, leader: 3, thanhvien: [3, 4] },
        { id: 6, tenDuAn: 'Chăm sóc thú cưng', ngayStart: '2022-02-11', tien: 18999900, leader: 3, thanhvien: [3, 4] },
    ]


    private url = 'http://localhost:3000/duAn';

    constructor(private http: HttpClient) { }

    getAllDA() {
        return this.listDuan;
    }

    getDataDA() {
        return this.http.get(this.url);
    }

    getSingleDA(id: number) {
        // return this.list.find((currentValue) => currentValue.id == id);
        return this.http.get(`${this.url}/${id}`);
    }

    addDA(item: Iduan = <Iduan>{}) {
        const params = new HttpParams({
            fromObject: { ...item },
        });

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });

        return this.http.post(this.url, params, { headers }).subscribe((data) => {
            // console.log(data);
        });
        // this.list.push(item);
    }

    editDA(item: Iduan = <Iduan>{}) {
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

    deleteDA(id: number = 0) {
        return this.http.delete(`${this.url}/${id}`).subscribe((data) => {
            console.log(data);
        });
        // let index = this.list.findIndex((currentValue) => {
        //   return currentValue.id == id;
        // });
        // console.log(index);
        // this.list.splice(index, 1);
    }


}
