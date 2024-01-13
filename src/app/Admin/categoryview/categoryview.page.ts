import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-categoryview',
  templateUrl: './categoryview.page.html',
  styleUrls: ['./categoryview.page.scss'],
})
export class CategoryviewPage implements OnInit {

  public category:any[]=[];
  constructor(private view:ServiceService) { }

  ionViewDidEnter() {
    this.view.getcategory().subscribe(res=>
      {
        console.log(res);
        this.category=res;
      });
  }

  deleteproduct(Id:string){
    if(confirm("Are you want to delete")){
      this.view.deleteproduct(Id).then((error:any)=>console.error(error));
    }
  }

  ngOnInit() {
  }

}
