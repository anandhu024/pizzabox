import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-desertindex',
  templateUrl: './desertindex.page.html',
  styleUrls: ['./desertindex.page.scss'],
})
export class DesertindexPage implements OnInit {

  public dessert:any[]=[];


  constructor(private view:ServiceService) { }

  ngOnInit() {

    this.view.getdessert().subscribe(res=>
      {
        console.log(res);
        this.dessert=res;
      });
  }

}
