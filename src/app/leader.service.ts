import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Leader } from './leader';

@Injectable({
    providedIn: 'root'
})
export class LeaderService {
    list: Leader[] = [
        {
            id: 1,
            fullname: 'Vua Bách',
            ngaysinh: '2001-11-15',
            phai: true,
        },
        {
            id: 2,
            fullname: 'Nguyễn Vua',
            ngaysinh: '1999-5-6',
            phai: true,
        },
        {
            id: 3,
            fullname: 'Nguyễn Xuân Bách',
            ngaysinh: '2002-3-6',
            phai: true,
        },
    ];

    private url = 'http://localhost:3000/leader';

    constructor(private http: HttpClient) { }

    getAllLeader() {
        return this.list;
    }

    getDataLeader() {
        return this.http.get(this.url);
    }

    getOne(id: number) {
        // return this.list.find((currentValue) => currentValue.id == id);
        return this.http.get(`${this.url}/${id}`);
    }

    addLeader(item: Leader = <Leader>{}) {
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

    editLeader(item: Leader = <Leader>{}) {
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

    deleteLeader(id: number = 0) {
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
