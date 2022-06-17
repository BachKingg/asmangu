import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dangky',
    templateUrl: './dangky.component.html',
    styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {

    constructor(
        private UserService: UserService,
        private router: Router,
    ) { }

    ngOnInit(): void {
    }
    userName: any;
    email: any;
    password: any = '';
    password2: any = '';
    wrongPass: boolean = false;
    truePass: boolean = false;
    
    checkPass() {
        if (
            this.password != '' &&
            this.password2 != '' &&
            this.password == this.password2
        ) {
            this.wrongPass = false;
            this.truePass = true;
        } else this.wrongPass = true;
    }
    
    xulyDN(dataForm: any) {
        this.UserService.addUser(dataForm);
        alert('Đăng ký thành công');
        this.router.navigate(['/dangnhap']);
    }
}
