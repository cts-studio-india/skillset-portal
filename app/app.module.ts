import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { AboutComponent } from "./components/about/about.component";
import { routing } from "./routes";
import { HomeComponent } from "./components/home/home.component";
import { ContactComponent } from "./components/contact/contact.component";
import { LoginComponent } from "./components/login/login.component";
import { DataTableComponent } from "./components/datatable/datatable.component";
import { AutoCompleteComponent } from "./components/autocomplete/autocomplete.component";
import { DataTableFilterComponent } from "./components/datatablefilter/datatablefilter.component";
import {InputTextModule,DataTableModule,ButtonModule,DialogModule,SelectButtonModule,SharedModule,MultiSelectModule,DropdownModule,SliderModule,AutoCompleteModule,ChartModule,FieldsetModule,TabMenuModule,GMapModule} from 'primeng/primeng';
import 'rxjs/add/operator/toPromise';
import { FormsModule } from '@angular/forms';
import {CarService} from './services/carservice';
import {CountryService} from './services/countryservice';
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing,
        ReactiveFormsModule,
        InputTextModule,
        DataTableModule,
        ButtonModule,
        DialogModule,
        FormsModule,
        SelectButtonModule,
        SharedModule,
        MultiSelectModule,
        DropdownModule,
        SliderModule,
        AutoCompleteModule,
        FieldsetModule,
        TabMenuModule,
        GMapModule
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        ContactComponent,
        LoginComponent,
        DataTableComponent,
        DataTableFilterComponent,
        AutoCompleteComponent
    ],
    providers:    [CarService,CountryService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
