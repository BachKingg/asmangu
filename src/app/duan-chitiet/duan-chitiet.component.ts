import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iduan } from '../iduan';
import { Inhanvien } from '../inhanvien';
import { DuanService } from '../duan.service';
import { NhanvienService } from '../nhanvien.service';

@Component({
    selector: 'app-duan-chitiet',
    templateUrl: './duan-chitiet.component.html',
    styleUrls: ['./duan-chitiet.component.css']
})
export class DuanChitietComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private DuanService: DuanService,
        private NhanvienService: NhanvienService
    ) { }


    @Output() teamOut = new EventEmitter();

    idDuAn: number = Number(this.route.snapshot.params['id']);
    allDuAn: any;
    allNV: any;
    duAn = <Iduan>{};
    listNv: Inhanvien[] = [];
    totalSouth: number = 0;
    totalNorth: number = 0;
    totalCentral: number = 0;


    team: {
        memberSouth: Inhanvien[];
        memberNorth: Inhanvien[];
        memberCentral: Inhanvien[];
    } = {
            memberSouth: [],
            memberNorth: [],
            memberCentral: [],
        };


    ngOnInit(): void {
        this.DuanService.getDataDA().subscribe(
            (response: any) => {
                this.allDuAn = response;
            },
            (error: any) => {
                console.log(error);
            }
        );

        this.NhanvienService.getDataNV().subscribe(
            (response: any) => {
                this.allNV = response;
                this.getData();
            },
            (error: any) => {
                console.log(error);
            }
        );


    }
    getData() {
        if (this.idDuAn < 0) return;

        //get detail this project
        this.DuanService.getSingleDA(this.idDuAn).subscribe(
            (response: any) => {
                if (response == null) {
                    this.duAn = {} as Iduan;
                } else {
                    this.duAn = response as Iduan;
                    //get info member in project
                    this.listNv = this.allNV.filter((item: any) =>
                        this.duAn.thanhvien.includes(item.id)
                    );

                    //check member area
                    this.listNv.forEach((item) => {
                        if (item.khuvuc == 'Bắc') {
                            this.team.memberNorth.push(item);
                            this.totalNorth = this.totalNorth + 1;
                        }
                        if (item.khuvuc == 'Trung') {
                            this.team.memberCentral.push(item);
                            this.totalCentral = this.totalCentral + 1;
                        }
                        if (item.khuvuc == 'Nam') {
                            this.team.memberSouth.push(item);
                            this.totalSouth = this.totalSouth + 1;
                        }
                    });
                    this.teamOut.emit(this.team);
                }
            },
            (error: any) => {
                console.log(error);
            }
        );
        this.NhanvienService.getDataNV().subscribe((data: any) => {
            this.listNv = data;
        });
    }


    onChange(deviceValue: any) {
        this.router.navigate(['/duan', deviceValue.value]);
        this.idDuAn = deviceValue.value;
        console.log(this.team);
        this.teamOut.emit(this.team);

        return true;
    }



}
