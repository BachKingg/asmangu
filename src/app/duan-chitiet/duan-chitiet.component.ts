import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DuanService } from '../duan.service';
import { Iduan } from '../iduan';

@Component({
    selector: 'app-duan-chitiet',
    templateUrl: './duan-chitiet.component.html',
    styleUrls: ['./duan-chitiet.component.css']
})
export class DuanChitietComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private daService: DuanService
    ) { }
    idDA: number = Number(this.route.snapshot.params['id'])
    da = <Iduan>{};
    ngOnInit(): void {
        if (this.idDA < 0) return;
        let kq = this.daService.getSingleDA(this.idDA);
        if (kq == null) {
            this.da = {} as Iduan;
        } else {
            this.da = kq as unknown as Iduan;
        }
    }

}
