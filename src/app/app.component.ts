import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'asmangu';
    team: any;
    constructor(
        private auth: AuthService,
        private router: Router,
    ) { }

    thoat() { this.auth.thoat(); }

    dataTeam($event: any) {
        this.team = $event.team;
        // console.log(this.team);
    }

    daDangNhap() { return this.auth.daDangNhap()}
    username = localStorage['username'];
}
