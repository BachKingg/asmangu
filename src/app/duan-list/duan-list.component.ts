import { Component, OnInit } from '@angular/core';
import { Iduan } from '../iduan';
import { DuanService } from '../duan.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
    selector: 'app-duan-list',
    templateUrl: './duan-list.component.html',
    styleUrls: ['./duan-list.component.css']
})
export class DuanListComponent implements OnInit {

    constructor(
        private DuanService: DuanService,
        private DataService: DataService,
        private Router: Router
    ) { }

    listDuan: Iduan[] = [];

    ngOnInit(): void {
        // this.listduan = this.daService.getAllDA();
        this.getData();
    }

    getData() {
        this.DuanService.getDataDA().subscribe(
          (response: any) => {
            this.listDuan = response;
          },
          (error: any) => {
            console.log(error);
          }
        );
      }
    
      editDuAn(duan: any) {
        this.DataService.sendData(duan);
        this.Router.navigate([`/duan/suaDA/${duan.id}`]);
        
      }
    
      deleteDuAn(id: number) {
        confirm('Bạn có chắc chắn muốn xóa dự án này không ?') &&
          this.DuanService.deleteDA(id);
        setTimeout(() => {
          this.getData();
        }, 500);
      }

}
