import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-myrequests',
  templateUrl: './myrequests.page.html',
  styleUrls: ['./myrequests.page.scss'],
})
export class MyrequestsPage  {
  public request: any;
  public total = 0;
  walletid:any;
  wallet:any;
  amount1=0;
  amount=0;
  constructor(private view: ServiceService, private router: Router) {
  }

  ionViewDidEnter() {
    this.view.getmyreq().subscribe(res => {
      console.log(res);
      this.request = res;
      for (let i = 0; i <= res.length - 1; i++) 
      {
        this.total =this.total+parseInt(this.request[i].itemamount);
      }
      console.log(this.total)
    }
    );
    this.view.getwalletbycusomerid(localStorage.getItem("customerId")).pipe(take(1)).subscribe(res=>
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
  submit()
  {
   console.log("amount1");
   console.log(this.amount1);
   console.log("amount");
   console.log(this.amount);
if(this.amount1<=0)
{
  alert("Insufficient balance");
}
else
{
// console.log(this.walletid);
// const data={
//   customername:localStorage.getItem("customername"), 
// customerid:localStorage.getItem("customerId"),
// amount :this.amount1,
// }
// this.view.updatewallet(this.walletid,data).then(()=>
// {
  // alert("Payment completed");
  this.router.navigate(['/Customer/delivery']);
// });





}
  }

  delete(itemorderId:string)
{
  if(confirm("Do you want to delete")){
    this.view.deleteorder(itemorderId).then(
      (error: any) =>console.error(error)
    );
    }
    }
  
  }
 
