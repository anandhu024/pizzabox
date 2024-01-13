import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-orindex',
  templateUrl: './orindex.page.html',
  styleUrls: ['./orindex.page.scss'],
})
export class OrindexPage implements OnInit {
pizza:any;

dessert:any;
  constructor( private view:ServiceService) { }

  ngOnInit() {

    this.view.getpizza().subscribe(res=>
      {
        console.log(res);
        this.pizza=res;
      });

      this.view.getdessert().subscribe(res=>
        {
          console.log(res);
          this.dessert=res;
        });
  }

}
