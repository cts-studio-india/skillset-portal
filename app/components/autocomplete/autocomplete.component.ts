import { Component } from '@angular/core';
import {CountryService} from '../../services/countryservice';



@Component({
    selector: 'p-datatable',
    templateUrl: '/components/autocomplete/autocomplete.component.html'
    
})
export class AutoCompleteComponent {

    country: any;
    
    countries: any[];
        
    filteredCountriesSingle: any[];
    
    filteredCountriesMultiple: any[];
    
    brands: string[] = ['Audi','BMW','Fiat','Ford','Honda','Jaguar','Mercedes','Renault','Volvo','VW'];
    
    filteredBrands: any[];
    
    brand: string;
    
    constructor(private countryService: CountryService) { }
    
    filterCountrySingle(event:any) {
        let query = event.query;        
        this.countryService.getCountries().then(countries => {
            this.filteredCountriesSingle = this.filterCountry(query, countries);
        });
    }
    
    filterCountryMultiple(event:any) {
        let query = event.query;
        this.countryService.getCountries().then(countries => {
            this.filteredCountriesMultiple = this.filterCountry(query, countries);
        });
    }
    
    filterCountry(query:any, countries: any[]):any[] {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered : any[] = [];
        for(let i = 0; i < countries.length; i++) {
            let country = countries[i];
            if(country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }
        
    filterBrands(event:any) {
        this.filteredBrands = [];
        for(let i = 0; i < this.brands.length; i++) {
            let brand = this.brands[i];
            if(brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredBrands.push(brand);
            }
        }
    }
    
    handleDropdownClick() {
        this.filteredBrands = [];
        
        //mimic remote call
        setTimeout(() => {
            this.filteredBrands = this.brands;
        }, 100)
    }
}