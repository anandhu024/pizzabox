import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-acceptrequests',
  templateUrl: './acceptrequests.page.html',
  styleUrls: ['./acceptrequests.page.scss'],
})
export class AcceptrequestsPage implements OnInit {

  public accept:any;
  constructor(private view:ServiceService,private route:ActivatedRoute) { 
  }

  ionViewDidEnter() {
    this.view.getmyacceptedrequest().subscribe(res=>
      {
        console.log(res);
        console.log(this.accept);
        this.accept=res;
      }
);
}

  ngOnInit() {
  }

}
