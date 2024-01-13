import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-profileedit',
  templateUrl: './profileedit.page.html',
  styleUrls: ['./profileedit.page.scss'],
})
export class ProfileeditPage implements OnInit {
  customerid: any;
  router: any;
  constructor(private fb: FormBuilder, private vs:ServiceService,private route:ActivatedRoute,private router1:Router) { 

    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.customerid = params.get('id');
    });
  }
  public signupedit=this.fb.group({
    name:['',Validators.required],
    address:['',Validators.required],
    place:['',Validators.required],
    email:['',Validators.required],
    number:['',Validators.required],
    password:['',Validators.required],
  })

  ngOnInit() {

    console.log(this.customerid);
    this.vs.getsignupbyid(this.customerid).subscribe(res=> {
      if (res) {
        this.signupedit.patchValue(res);
      }
    });
  }

  update() {
    this.vs.editsignup(this.customerid, this.signupedit.value).then(() => {
     alert("Successfully Updated");
     this.router1.navigate(['./Customer/profile']);

   });
  }

}
