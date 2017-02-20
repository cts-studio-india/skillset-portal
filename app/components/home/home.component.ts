import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import {MenuItem} from 'primeng/primeng';
@Component({
    selector: 'my-home',
    templateUrl: 'components/home/home.component.html',
    styleUrls: ['components/home/home.component.css']
})
export class HomeComponent {
    name: string = "Home page";
    users: {};
   // options: any;
    
   // overlays: any[];
    constructor(http: Http) {
        
        http.get("/users")
            .map(data => data.json())
            .subscribe((data) => this.users = data);
    }

    private items: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'Stats', icon: 'fa-bar-chart'},
            {label: 'Calendar', icon: 'fa-calendar'},
            {label: 'Documentation', icon: 'fa-book'},
            {label: 'Support', icon: 'fa-support'},
            {label: 'Social', icon: 'fa-twitter'}
        ];

         /*this.options = {
            center: {lat: 36.890257, lng: 30.707417},
            zoom: 12
        };*/
    }


    
    
   
}