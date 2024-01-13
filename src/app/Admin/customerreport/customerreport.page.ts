import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-customerreport',
  templateUrl: './customerreport.page.html',
  styleUrls: ['./customerreport.page.scss'],
})
export class CustomerreportPage  {

  public profile: any[] = [];

  constructor(private ss:ServiceService) { }
  ionViewDidEnter() {
    this.ss.getcust().subscribe(res => {
      console.log(res);
      this.profile= res;
});
}
}


