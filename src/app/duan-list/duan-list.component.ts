import { Component, OnInit } from '@angular/core';
import { Iduan } from '../iduan';
import { DuanService } from '../duan.service';

@Component({
    selector: 'app-duan-list',
    templateUrl: './duan-list.component.html',
    styleUrls: ['./duan-list.component.css']
})
export class DuanListComponent implements OnInit {

    constructor(
        private daService: DuanService
    ) { }
    
    listduan: Iduan[]=[];

    ngOnInit(): void {
        this.listduan= this.daService.getAllDA();
    }

}
