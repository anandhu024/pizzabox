import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { take } from 'rxjs';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  public collection_signupId:any[]=[];
customerdata:any;
  constructor(private fb :FormBuilder,private router:Router,private vs:ServiceService,private route:ActivatedRoute) { }
  public cuslogin=this.fb.group({
    email:[''],
    password:['']
  })

  ngOnInit() {
  }

  submit()
  {
    console.log(this.cuslogin.value);
    this.vs.customerlogin(this.cuslogin.value.email,this.cuslogin.value.password)
    .pipe(take(1)).subscribe(res=>{
      console.log(res);
      this.collection_signupId=res;
      if(this.collection_signupId.length>0){
        localStorage.setItem('customerlogin',this.collection_signupId[0].email),
        localStorage.setItem('customerId',res[0].collection_signupId),
        localStorage.setItem('customername',this.collection_signupId[0].name),
        localStorage.setItem('customerphone',this.collection_signupId[0].number)
        this.router.navigate(['/Customer/orindex']);
      }
      else{
        alert("Please check the Email/Password");
      console.log("invalid email/password");
      
      }
    });
  }

}
