import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'asmangu';
    team: any;

    dataTeam($event: any) {
        this.team = $event.team;
        // console.log(this.team);
    }
}
