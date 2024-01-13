import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-size',
  templateUrl: './size.page.html',
  styleUrls: ['./size.page.scss'],
})
export class SizePage implements OnInit {
  customerdata: any;

  constructor(private fb:FormBuilder,private rs:ServiceService,private router:Router) { }
  public sizereg=this.fb.group({
    Size:[''],
    sizedescription:['']
  })

  ngOnInit() {
  }
  submit()
  {

    if (this.sizereg.value.Size == "" || this.sizereg.value.sizedescription == "")
    {
      alert("please fill in all fields");
     }
  else{
    this.rs.customervalidation2( this.sizereg.value.Size)
    .pipe(take(1))
      .subscribe(res => {
        console.log(res);
        this.customerdata = res;
        if (this.customerdata.length > 0) {
          alert("Data already Exist!!!"); 
        }
        else {
  
          console.log(this.sizereg.value);
            this.rs.addcategory(this.sizereg.value).then(()=>
            {
              alert("Registration completed");
              this.router.navigate(['/Admin/categoryview']);
            });

  }
  
    });
 
}

 
  }


}


// {
//   console.log(this.sizereg.value);
//   this.rs.addsize(this.sizereg.value).then(()=>
//   {
//     alert("Registration completed");
//     this.router.navigate(['/Admin/sizeview']);
//   });
// }