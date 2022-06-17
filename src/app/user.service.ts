import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class UserService {
    private url = 'http://localhost:5000/taiKhoan';

    constructor(
        private http: HttpClient,
    ) { }
    getData() {
        return this.http.get(this.url);
    }

    getOne(id: number) {
        return this.http.get(`${this.url}/${id}`);
    }

    addUser(item: any) {
        const params = new HttpParams({
            fromObject: { ...item },
        });

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });

        return this.http.post(this.url, params, { headers }).subscribe((data) => {
            // console.log(data);
        });
    }

    editUser(item: any) {
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
    }

    deleteUser(id: number = 0) {
        return this.http.delete(`${this.url}/${id}`).subscribe((data) => {
            console.log(data);
        });
    }
}
