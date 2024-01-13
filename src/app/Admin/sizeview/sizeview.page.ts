import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-sizeview',
  templateUrl: './sizeview.page.html',
  styleUrls: ['./sizeview.page.scss'],
})
export class SizeviewPage implements OnInit {

  public size:any[]=[];
  constructor(private view:ServiceService) { }

  ionViewDidEnter() {
    this.view.getsize().subscribe(res=>
      {
        console.log(res);
        this.size=res;
      });
  }

  deletesize(Id:string){
    if(confirm("Are you want to delete")){
      this.view.deletesize(Id).then((error:any)=>console.error(error));
    }
  }

  ngOnInit() {
  }

}
