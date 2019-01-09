import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, Http } from '@angular/http';
import {observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly url = 'http://localhost:24070/';
  constructor(private http: HttpClient) { }

  register(customer: Customer){
    const body: Customer = {
      firstname: customer.firstname,
      lastname: customer.lastname,
      address: customer.address,
      contactnumber: customer.contactnumber,
      email: customer.email
    }

    return this.http.post(this.url + 'api/users/insert', body);
  }
}
