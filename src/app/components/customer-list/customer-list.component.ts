import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/domain/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public listCostumers: Customer[]=[];
  constructor(public customerService: CustomerService) {
    //this.listCostumers=[];
  }

  ngOnInit(): void {
  this.findAllCustomers();
  }

  findAllCustomers():void{
    this.customerService.findAll().subscribe((data)=>
    this.listCostumers=data)
  }
}
