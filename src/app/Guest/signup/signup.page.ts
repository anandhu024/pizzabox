import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-signup', 
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  formatdate:any;
  mydate:any;
  signup!:FormGroup;
  customerdata:any;

  constructor(private fb:FormBuilder,private rs:ServiceService,private router:Router,private datepipe:DatePipe) { }




  ngOnInit() {
    this.mydate=new Date();
    this.formatdate=this.datepipe.transform(this.mydate,'yyyy-MM-dd');
    this.signup=this.fb.group({
      name:['',Validators.required],
      address:['',Validators.required],
      place:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      number:['',[Validators.required,Validators.minLength(10),Validators.pattern(/^[0-9]+$/)]],
      password:['',Validators.required],
  registrationdate:this.formatdate
    })
  }

  submit()
  {
    if(this.signup.value.name ==""||
    this.signup.value.number ==""||
    this.signup.value.email ==""||
    this.signup.value.address ==""||
    this.signup.value.place ==""||
    this.signup.value.password =="")
    {
      alert("Please Fill all the fields")
  }

  

  if(this.signup.value.number != null && this.signup.value.number.length != 10){
    alert("Please enter a valid phone number!");
    return;
  }

  if(this.signup.controls["email"] != null && this.signup.controls["email"].errors != null){
    alert("Please enter a valid email id");
    return;
  }

  else
  {

    this.rs.customervalidation(this.signup.value.email)
      .pipe(take(1))
      .subscribe(res => {
        console.log(res);
        this.customerdata = res;
        if (this.customerdata.length > 0) {
          alert("Account with this email already exist...!");
          }
  else{
    
    console.log(this.signup.value);
    this.rs.addsignup(this.signup.value).then(() => {
      // alert("Registration Completed");
      this.router.navigate(['/Guest/signin']);
    
      
});
  }

  });
}
}
}
