import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-rejectrequests',
  templateUrl: './rejectrequests.page.html',
  styleUrls: ['./rejectrequests.page.scss'],
})
export class RejectrequestsPage implements OnInit {
  public reject:any;
  constructor(private view:ServiceService,private route:ActivatedRoute) { 
  }

  ionViewDidEnter() {

}

  ngOnInit() {
    this.view.getmyrejectedreq().subscribe(res=>
      {
        console.log(res);
        this.reject=res;
      }
);
  }

}
