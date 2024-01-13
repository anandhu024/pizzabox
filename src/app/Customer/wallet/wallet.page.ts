import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  public wallet:any[]=[];
  public myincome:any[]=[];
  public income:any[]=[];

  constructor(private view:ServiceService) { }

  ionViewDidEnter() {
    this.view.getwallet(localStorage.getItem("customerId")).pipe(take(1)).subscribe(res=>
      {
        console.log(res);
        this.wallet=res;
      });



      this.view.getincomeview().subscribe(res=>
        {
          console.log(res);
          this.myincome=res;
        });


        this.view.getincomereject().subscribe(res=>
          {
            console.log(res);
            this.income=res;
          }
    );
  }


  ngOnInit() {
  }

}
