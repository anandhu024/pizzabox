import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {
  orderid:any;
  formatdate:any;
  public request: any;
  customerid:any;
  mydate:any;
  walletid:any;
  wallet:any;
  amount1=0;
  amount=0;
  total=0;

  constructor(private fb: FormBuilder, private vs:ServiceService,private route:ActivatedRoute,private datepipe:DatePipe,private router:Router) { 

    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.orderid = params.get('id');
    });
  }

  public pizzaorder=this.fb.group({

    customername:localStorage.getItem("customername"),
    daddress:[''],
    location:[''],
    lmark:[''],
    street:[''],

  
    customerid:localStorage.getItem("customerId"),

  })

  ngOnInit() {

    this.mydate=new Date();
    this.formatdate=this.datepipe.transform(this.mydate,'yyyy-MM-dd');
    this.vs.getmyreq().subscribe(res => {
      console.log(res);
      this.request = res;
      for (let i = 0; i <= res.length - 1; i++) 
      {
        this.total =this.total+parseInt(this.request[i].itemamount);
      }
      console.log(this.total)
    }
    );



    this.vs.getwalletbycusomerid(localStorage.getItem("customerId")).pipe(take(1))
    .subscribe(res=>
      {
        console.log(res);
        this.wallet=res;
    this.walletid=res[0].collection_walletId;
    this.amount=this.wallet[0].amount;
    console.log(this.wallet[0].amount);
    if(res.length>0)
        {  
    const a=this.total
    const b=this.wallet[0].amount
          this.amount1=this.amount-a;
    console.log(a)
    console.log(this.total)
    console.log(this.amount1)
           
        }
      });
  }

  update(){

    if ( this.pizzaorder.value.daddress == "" || this.pizzaorder.value.location == "" || this.pizzaorder.value.street == "" || this.pizzaorder.value.lmark == "")
    {
      alert("please fill in all fields");
     }
     else 
    {
      console.log(this.pizzaorder);

      this.vs.getmyreq().subscribe(res => {
        console.log(res);
        this.request = res;
          
     

      console.log(this.request[0]);
       for(let i=0;i<=res.length-1;i++)
       {
        this.vs.requestaccept(res[i].collection_requestsId,this.request[i],this.pizzaorder.value.daddress).then((error:any)=>
      
        console.error(error));
       }
     
    })
    console.log(this.walletid);
    const data={
      customername:localStorage.getItem("customername"), 
    customerid:localStorage.getItem("customerId"),
    amount :this.amount1,
    }
    this.vs.updatewallet(this.walletid,data).then(()=>
    {
      alert("Payment completed");
      this.router.navigate(['/Customer/orindex']);
    });
 
  }

}

}
