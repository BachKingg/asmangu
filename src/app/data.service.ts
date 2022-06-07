import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private dataService: any = '';

    //khi bấm nút sửa gọi method này để lưu dữ liệu vào biến dataService
    sendData(data: any) {
        this.dataService = data;
    }

    clearData() {
        this.dataService = '';
    }

    //ở component form sửa, gọi getData để lấy dữ liệu từ dataService để
    //load lên form
    getData() {
        return this.dataService;
    }
}
