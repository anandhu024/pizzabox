import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-reportdate',
  templateUrl: './reportdate.page.html',
  styleUrls: ['./reportdate.page.scss'],
})
export class ReportdatePage implements OnInit {

  public fedback:any;
  constructor(private view:ServiceService) { }

  ngOnInit() {

    this.view.getfeedbackreportt().subscribe(res=>
      {
        console.log(res);
        console.log(this.fedback);
        this.fedback=res;
      }
);

  }
  

}
