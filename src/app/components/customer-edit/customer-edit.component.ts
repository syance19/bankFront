import { CustomerService } from 'src/app/services/customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/domain/customer';
import {DocumentType} from 'src/app/domain/document-type';
import { DocumentTypeService } from 'src/app/services/document-type.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: Customer;
  documentTypes: DocumentType[];

  showMsg:boolean=false;
  messages:string[]=[""];
  custId: number;
  //customer:Customer;
  constructor(public activatedRouter:ActivatedRoute,
    public customerService: CustomerService,
    public documentTypeService:DocumentTypeService) { }

  ngOnInit(): void {
    let params=this.activatedRouter.params['_value'];
    this.custId=params.custId;
    this.customerService.findById(this.custId).subscribe((data)=>{
      this.customer=data;
      console.table(this.customer)
    });
    this.findAllDocuments();
  }
  findAllDocuments():void{
    this.documentTypeService.findAll().subscribe((data)=>{
    this.documentTypes=data;
    })
  }


  update():void{
    this.messages=[""];
    this.customerService.update(this.customer).subscribe(ok=>{
      this.showMsg=true;
      this.messages[0]="Customer se modifico con éxito";
    },error=>{
      this.showMsg=true;
      this.messages=error.error.error;
    });
  }
  delete():void{
    this.messages=[""];
    this.customerService.delete(this.customer.custId).subscribe(ok=>{
      this.showMsg=true;
      this.messages[0]="Customer se borro con éxito";
    },error=>{
      this.showMsg=true;
      this.messages=error.error.error;
    });
  }

}
