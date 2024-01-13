import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.page.html',
  styleUrls: ['./adminlogin.page.scss'],
})
export class AdminloginPage implements OnInit {
public collection_adminloginId:any[]=[];
  constructor(private fb :FormBuilder,private router:Router,private vs:ServiceService,private route:ActivatedRoute) { }
  public adlogin=this.fb.group({
    username:[''],
    password:['']
  })

  ngOnInit() {
  }
  submit()
  {
    console.log(this.adlogin.value);
    this.vs.adminlogin(this.adlogin.value.username,this.adlogin.value.password)
    .pipe(take(1)).subscribe(res=>{
      console.log(res);
      this.collection_adminloginId=res;
      if(this.collection_adminloginId.length>0){
        this.router.navigate(['/Admin/index']);
      }
      else{
        alert("invalid username/password");
      console.log("invalid username/password");
      }
    });
  }
}
