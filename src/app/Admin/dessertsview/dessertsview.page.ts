import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-dessertsview',
  templateUrl: './dessertsview.page.html',
  styleUrls: ['./dessertsview.page.scss'],
})
export class DessertsviewPage implements OnInit {
  public dessert:any[]=[];

  constructor(private view:ServiceService) { }

  ionViewDidEnter() {
    this.view.getdessert().subscribe(res=>
      {
        console.log(res);
        this.dessert=res;
      });
  }

  ngOnInit() {
  }
  deletedessert(Id:string){
    if(confirm("Are you want to delete")){
      this.view.deletedessert(Id).then((error:any)=>console.error(error));
    }
  }

}
