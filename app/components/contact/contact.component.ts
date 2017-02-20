import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'my-contact',
    templateUrl: 'components/contact/contact.component.html',
    styleUrls: ['components/contact/contact.component.css']
})
export class ContactComponent {
    /*name: string = "Home page";
    users: {};

    constructor(http: Http) {
        http.get("/users")
            .map(data => data.json())
            .subscribe((data) => this.users = data);
    }*/
}