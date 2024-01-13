import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-reportaccept',
  templateUrl: './reportaccept.page.html',
  styleUrls: ['./reportaccept.page.scss'],
})
export class ReportacceptPage implements OnInit {
  public accept:any;
  constructor(private view:ServiceService) { }

  ngOnInit() {

    this.view.getacceptedreportt().subscribe(res=>
      {
        console.log(res);
        console.log(this.accept);
        this.accept=res;
      }
);

  }

}
