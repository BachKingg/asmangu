import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itask } from './itask';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    listTask: Itask[] = [
        { id: 1, tenTask: 'Phân tích yêu cầu', duAnID: 1, nhanvienID: 1, moTa: "Phân tích các yêu cầu của khách hàng để team thực hiện", status: 0, priority: 1 },
        { id: 2, tenTask: 'Thực hiện layout cho ứng dụng', duAnID: 1, nhanvienID: 2, moTa: "Thực hiện layout website, chú ý kỹ responsive", status: 0, priority: 1 },
        { id: 3, tenTask: 'Tìm hiểu yêu cầu của khách hàng', duAnID: 2, nhanvienID: 3, moTa: "Đến công ty và ghi nhận các yêu cầu của khách hàng", status: 0, priority: 2 },
        { id: 4, tenTask: 'Đăng ký thành viên', duAnID: 3, nhanvienID: 4, moTa: "Thực hiện chức năng đăng ký, có capcha, mail kích hoạt", status: 0, priority: 1 },
        { id: 5, tenTask: 'Đổi pass, quên pass', duAnID: 1, nhanvienID: 4, moTa: "Thực hiện chức năng đỗi pass, quên pass. Nhớ kiểm tra user login, email tồn tại, pass cũ hợp lệ ", status: 0, priority: 1 },
        { id: 6, tenTask: 'Testing 1', duAnID: 4, nhanvienID: 3, moTa: "Kiểm tra mọi form chức năng theo các case đã liệt kê", status: 0, priority: 2 },
        { id: 7, tenTask: 'Triển khai website', duAnID: 5, nhanvienID: 4, moTa: "Triển khai website lên hosting đã mua", status: 0, priority: 2 },
        { id: 8, tenTask: 'Hướng dẫn sử dụng và bàn giao', duAnID: 5, nhanvienID: 1, moTa: "Hướng dẫn sử dụng cho khách hàng", status: 0, priority: 2 },
        { id: 9, tenTask: 'Testing 2', duAnID: 4, nhanvienID: 2, moTa: "Kiểm tra các tính năng bảo mật theo các yêu cầu đã nêu trong tài liệu dự án", status: 0, priority: 2 },
    ]
    
    private url = 'http://localhost:5000/task';

    constructor(private http: HttpClient) { }


    getAllTask() {
        return this.listTask;
    }

    getDataTask() {
        return this.http.get(this.url);
    }

    getSingleTask(id: number) {
        // return this.list.find((currentValue) => currentValue.id == id);
        return this.http.get(`${this.url}/${id}`);
    }

    addTask(item: Itask = <Itask>{}) {
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

    editTask(item: Itask = <Itask>{}) {
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

    deleteTask(id: number = 0) {
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
