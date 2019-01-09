import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/customer.model';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  customer: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
    if(form!=null)
    form.reset();
    this.customer = {
      firstname:'',
      lastname:'',
      address:'',
      contactnumber:'',
      email:''
    }
  }

  onSubmit(form: NgForm){
    this.customerService.register(form.value)
    .subscribe((data:any) => {
      if(data.Succeeded == true)
      {
        this.resetForm(form);
      }
    });
  }

}
