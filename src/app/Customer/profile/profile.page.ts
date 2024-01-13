import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public profile:any[]=[];
  constructor(private view:ServiceService) { }

  ionViewDidEnter() {
    this.view.getprofile(localStorage.getItem("customername")).subscribe(res=>
      {
        console.log(res);
        this.profile=res;
      });
  }
  

  ngOnInit() {
  }

}
