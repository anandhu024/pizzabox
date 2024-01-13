import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  customerdata:any;

  constructor(private fb:FormBuilder,private rs:ServiceService,private router:Router) { }
  public Categoryreg=this.fb.group({
    categoryname:[''],
    categorydescription:['']
  })

  ngOnInit() {
  }
  submit()
  {

    if (this.Categoryreg.value.categoryname == "" || this.Categoryreg.value.categorydescription == "")
    {
      alert("please fill in all fields");
     }
  else{
    this.rs.customervalidation1( this.Categoryreg.value.categoryname)
    .pipe(take(1))
      .subscribe(res => {
        console.log(res);
        this.customerdata = res;
        if (this.customerdata.length > 0) {
          alert("Data already Exist!!!"); 
        }
        else {
  
          console.log(this.Categoryreg.value);
            this.rs.addcategory(this.Categoryreg.value).then(()=>
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
    
  //   console.log(this.Categoryreg.value);
  //   this.rs.addcategory(this.Categoryreg.value).then(()=>
  //   {
  //     alert("Registration completed");
  //     this.router.navigate(['/Admin/categoryview']);
  //   });
  // }