import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  public personalinformation: any[] = [];
  customerid: any;
  phonenumber: any;
  totalamount: any;
  formatdate: any;
  mydate: any;
  amount1 = 0;
  wallet: any;
  paymentform!: FormGroup;
  walletid: any;
  amount = 0;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private datepipe: DatePipe, private router: Router, private viewservice: ServiceService, private storage: AngularFireStorage) {
    //   this.route.paramMap
    // // .pipe(take(1))
    // .subscribe((params: ParamMap) => {
    //   this.productid = params.get('id');
    // });}
  }
  public personalform = this.fb.group(
    {
      name: ['', Validators.required],
      number: ['', Validators.required],
      // address:[''],
      // place:[''],
      email: ['',Validators.required],
      // password:[''],
    });

  ngOnInit() {
    this.mydate = new Date();
    this.formatdate = this.datepipe.transform(this.mydate, 'yyyy-MM-DDTHH:mm');




    this.paymentform = this.fb.group(
      {
        customername: localStorage.getItem("customername"),
        amount: ['',Validators.required],
        cardtype: ['',Validators.required],
        cvv: ['',Validators.required],
        exp: ['',Validators.required],
        exp1: ['',Validators.required],
        namecard: ['',Validators.required],
        numbercard: ['', [Validators.required, Validators.minLength(16)]],
        customerid: localStorage.getItem("customerId"),
        registrationdate: this.formatdate,
        //   status:"Payment Completed",
      });
    // this.customerid=localStorage.getItem("customerId");
    // console.log(this.customerid);
    // this.viewservice.getcustomerbyid(this.customerid).subscribe(res => {
    //   console.log(res);
    //   this.personalinformation[0] = res;
    //   console.log(this.personalinformation[0].name);
    //   this.personalform.setValue(res);
    // });

  } 
  payment() {
    if (this.paymentform.value.amount == "" || 
    this.paymentform.value.cardtype == "" || 
    this.paymentform.value.cvv == "" || 
    this.paymentform.value.namecard == "" ||
     this.paymentform.value.numbercard == "" || 
     this.paymentform.value.exp == "" || 
     this.paymentform.value.exp1 == "" || 
     this.personalform.value.name == "" || 
     this.personalform.value.number == "" || 
     this.personalform.value.email == "") {
      alert("please fill in all fields");
    }

    if(this.personalform.value.number != null && this.personalform.value.number.length != 10){
      alert("Please enter a valid Phone Number!");
      return;
    }
    

     if(this.paymentform.value.cvv != null && this.paymentform.value.cvv.length != 3){
      alert("Please enter a valid CVV Number!");
      return;
    }

    if(this.paymentform.value.numbercard != null && this.paymentform.value.numbercard.length != 16){
      alert("Please enter a valid Card Number!");
      return;
    }


    else {
      console.log(this.paymentform.value);

      this.viewservice.getwalletbycusomerid(localStorage.getItem("customerId")).pipe(take(1))
        .subscribe(res => {
          console.log("Wallet");
          console.log(res);
          // console.log(this.wallet[0].amount);
          if (res.length <= 0) {

       
            this.viewservice.addpayment(this.paymentform.value).then(() => {
              alert("Payment completed");
              this.router.navigate(['/Customer/wallet']);
            });
          }




          else {
            this.wallet = res;
            this.amount = this.wallet[0].amount;
            this.walletid = res[0].collection_walletId;
            const a = this.paymentform.value.amount
            const b = this.wallet[0].amount
            this.amount1 = parseInt(a) + this.amount;
            console.log(a)
            console.log(this.amount)
            console.log(this.amount1)
            const data = {
              customername: localStorage.getItem("customername"),
              customerid: localStorage.getItem("customerId"),
              amount: this.amount1,
            }
            this.viewservice.updatewallet(this.walletid, data).then(() => {
              alert("Payment completed");
              this.router.navigate(['/Customer/wallet']);
            });
          }
        });


    }
  }
}
