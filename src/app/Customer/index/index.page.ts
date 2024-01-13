import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  public pizza:any[]=[];
  category:any;
  size:any;


  constructor(private fb:FormBuilder,private view:ServiceService) { }
  public dropdown=this.fb.group({
    categoryname:[''],
    sizename:[''],
  })


  ngOnInit() {

    this.view.getcategory().subscribe((data:any)=>{
      this.category=data;
      console.log(data)
    });

    this.view.getsize().subscribe((data1:any)=>{
      this.size=data1;
      console.log(data1)
    });
    this.view.getpizza().subscribe(res=>
      {
        console.log(res);
        this.pizza=res;
      });


  }
  pizzaview(){
    this.view.getpizzabycatagoery(this.dropdown.value.categoryname,this.dropdown.value.sizename).subscribe(res=>
      {
        console.log(res);
        this.pizza=res;
      });

  }

}
