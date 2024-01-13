import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-reportreject',
  templateUrl: './reportreject.page.html',
  styleUrls: ['./reportreject.page.scss'],
})
export class ReportrejectPage implements OnInit {
  public reject:any;

  constructor(private view:ServiceService) { }

  ngOnInit() {

    this.view.getrejectedreport().subscribe(res=>
      {
        console.log(res);
        this.reject=res;
      }
);
  }

}
