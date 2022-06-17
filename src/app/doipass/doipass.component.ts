import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-doipass',
    templateUrl: './doipass.component.html',
    styleUrls: ['./doipass.component.css']
})
export class DoipassComponent implements OnInit {
    
    userName: any;
    password: any = '';
    password2: any = '';
    wrongPass: boolean = false;
    truePass: boolean = false;

    constructor(
        private UserService: UserService,
        private router: Router,
    ) { }


    ngOnInit(): void {
        this.userName = localStorage.getItem('username');
    }
    xulyDN(dataForm: any) {
        let id: any = localStorage.getItem('userid');
        this.UserService.getOne(id).subscribe((data: any) => {
            data = {
                ...data,
                password: dataForm.password,
            };
            this.UserService.editUser(data);
            alert('Đổi mật khẩu thành công');
            this.router.navigate(['/dangnhap']);

        });
    }

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
}
