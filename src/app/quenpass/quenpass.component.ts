import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
    selector: 'app-quenpass',
    templateUrl: './quenpass.component.html',
    styleUrls: ['./quenpass.component.css']
})
export class QuenpassComponent implements OnInit {

    constructor(
        private UserService: UserService,
        private router: Router,
    ) { }

    ngOnInit(): void {
    }
    xulyDN(dataForm: any) {
        let id: any = localStorage.getItem('userid');
        this.UserService.getOne(id).subscribe((data: any) => {
            console.log(data.password);
            alert('Mật khẩu của bạn là : ' + data.password);
            this.router.navigate(['/dangnhap']);

        });
    }

}













