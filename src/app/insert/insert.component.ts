import { Component,OnInit } from '@angular/core';
import { Bank } from '../bank';
import { BankserviceService } from '../bankservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit{

 bankclsobj=new Bank(0,"","",0,0,"","");

  constructor(private bankserviceobj:BankserviceService,private robj:Router){} // create the object for router and Bank service.

  registercustomer()
  {
    this.bankserviceobj.insertcustomerdetails(this.bankclsobj).subscribe(()=>{this.robj.navigate(["/"])});
  }


  ngOnInit(): void {
    
  }

}
