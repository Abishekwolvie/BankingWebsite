import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Bank } from './bank';


@Injectable({
  providedIn: 'root'
})
export class BankserviceService {

  dburl:string="http://localhost:3000/Bank";    // url to access the database

  constructor(private httpobj:HttpClient) { }   // create object for HttpClient class

  insertcustomerdetails(bankclassobj:Bank){

    return this.httpobj.post(this.dburl,bankclassobj);  //method to insert customer details to the bank

  }

}
