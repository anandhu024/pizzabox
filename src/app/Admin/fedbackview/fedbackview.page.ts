import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-fedbackview',
  templateUrl: './fedbackview.page.html',
  styleUrls: ['./fedbackview.page.scss'],
})
export class FedbackviewPage implements OnInit {

  public fedback:any[]=[];
  constructor(private view:ServiceService) { }

  ionViewDidEnter() {
    this.view.getfeedbackadmin().subscribe(res=>
      {
        console.log(res);
        this.fedback=res;
      });
  }

  ngOnInit() {
  }

}
