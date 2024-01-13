import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-pizzaview',
  templateUrl: './pizzaview.page.html',
  styleUrls: ['./pizzaview.page.scss'],
})
export class PizzaviewPage implements OnInit {

  public pizza:any[]=[];

  constructor(private view:ServiceService) { }

  ionViewDidEnter() {
    this.view.getpizza().subscribe(res=>
      {
        console.log(res);
        this.pizza=res;
      });
  }


  ngOnInit() {
  }

  deletepizza(Id:string){
    if(confirm("Are you want to delete")){
      this.view.deletepizza(Id).then((error:any)=>console.error(error));
    }
  }

}
