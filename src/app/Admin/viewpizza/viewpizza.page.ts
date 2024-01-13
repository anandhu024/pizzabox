import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-viewpizza',
  templateUrl: './viewpizza.page.html',
  styleUrls: ['./viewpizza.page.scss'],
})
export class ViewpizzaPage implements OnInit {

  public pizza:any[]=[];
  category:any;
  constructor(private view:ServiceService,private router:Router,private fb :FormBuilder) { }
  public dropdown=this.fb.group({
    title:[''],
  })

  ionViewDidEnter() {
    this.view.getview().subscribe(res=>
      {
        console.log(res);
        this.pizza=res;
      });
  }
  ngOnInit() {

    this.view.getrequest().subscribe((data:any)=>{
      this.category=data;
      console.log(data)
    });
    
  }

  categoryview(){
    this.view.dropdown(this.dropdown.value.title).subscribe(res=>
      {
        console.log(res);
        this.pizza=res;
      });
    }



  request(customername:any,formatdate:any,customerId:any)
  {
    localStorage.setItem('formatdate',formatdate);
    localStorage.setItem('customerId',customerId);
        this.router.navigate(['/Admin/payment',customername ])
  }

  // request1()
  // {
  //   // localStorage.setItem('formatdate',formatdate);
  //   // localStorage.setItem('customerId',id);
  //       this.router.navigate(['/Admin/viewmorepizza',customername ]);


  // }


  view1(customerId:any,formatdate:any)
  {
    localStorage.setItem('formatdate',formatdate);
    localStorage.setItem('customerId',customerId);
        this.router.navigate(['/Admin/viewmorepizza',customerId]);
    }
}
