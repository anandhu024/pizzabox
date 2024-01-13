import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  name:any;
  public payment:any[]=[];
  constructor(private view:ServiceService,private route:ActivatedRoute) { 
    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.name = params.get('id');
    });
  }

  ionViewDidEnter() {
    this.view.getpayment(this.name).subscribe(res=>
      {
        console.log(res);
        this.payment=res;
      });
  }

  ngOnInit() {
  }

}
