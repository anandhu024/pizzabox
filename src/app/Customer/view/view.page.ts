import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  pizza:any;
  orderid:any;

  constructor(private vs:ServiceService,private fb:FormBuilder) { }

  public pizzaorder=this.fb.group({
    pizzaname:[''],
    pizzadescription:[''],
    image:[''],
    quantity:['',Validators.maxLength(3)],
    customername:localStorage.getItem("customername"),
    daddress:[''],
    tamount:[''],
    Price:[''], 
    sizename:[''],
    date:[''],
    customerid:localStorage.getItem("customerId"),
    requeststatus:"pending",

  })

  ngOnInit() {

    console.log(this.orderid);
    this.vs.getorderbyid(this.orderid,).subscribe(res=> {
      if (res) {
        this.pizzaorder.patchValue(res);
        this.pizza[0]=res;

      }
    });
  }

update(){

}
}
