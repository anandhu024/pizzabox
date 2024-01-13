import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-pizzaedit',
  templateUrl: './pizzaedit.page.html',
  styleUrls: ['./pizzaedit.page.scss'],
})
export class PizzaeditPage implements OnInit {
public pizza:any[]=[];
  pizzaid: any;
  router: any; 
  category:any;
  size:any;
  image:any;

  constructor(private fb: FormBuilder, private vs:ServiceService,private route:ActivatedRoute,private router1:Router,private storage: AngularFireStorage) { 
    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.pizzaid = params.get('id');
    });
  }

  public pizzaedit=this.fb.group({
    pizzaname:[''],
    pizzadescription:[''],
    image:[''],
    categoryname:[''],
    sizename:[''],
    Price:[''],
  })

  ngOnInit() {

    this.vs.getcategory().subscribe((data:any)=>{
      this.category=data;
      console.log(data)
    });

    this.vs.getsize().subscribe((data1:any)=>{
      this.size=data1;
      console.log(data1)
    });

    console.log(this.pizzaid);
    this.vs.getpizzabyid(this.pizzaid).subscribe(res=> {
      if (res) {
        this.pizzaedit.patchValue(res);
        this.pizza[0]=res;

      }
    });
  }

  upload(file :any) {
    const path = `Pizza/${Date.now()}_${file.name}`;
    // Reference to storage bucket
    const ref = this.storage.ref(path);
    // The main task
    const task = this.storage.upload(path, file);
    // Progress monitoring
    return new Promise((resolve, reject) => {
      task.then(async (res) => {
        const url = await res.ref.getDownloadURL();
        resolve(url);
      })
        .catch((err) => {
          console.log(err.message_);
          reject(err.code_);
        });
    });
  }
  async handlefile(event: any) {
    const files = event?.target?.files;
    if (files?.length) {
      this.image = await this.upload(files[0]);
      console.log(this.image);
      this.pizzaedit.controls.image.setValue(this.image);
      alert("File Uploaded");

    }
  }


  update() {

    if (this.pizzaedit.value.pizzaname == "" || this.pizzaedit.value.pizzadescription == "" || this.pizzaedit.value.image == "" || this.pizzaedit.value.categoryname == "" || this.pizzaedit.value.sizename == "" || this.pizzaedit.value.Price == "")
    {
      alert("please fill in all fields");
     }
     else{
    this.vs.editpizza(this.pizzaid, this.pizzaedit.value).then(() => {
     alert("Pizza Updated");
     this.router1.navigate(['./Admin/pizzaview']);

   });
  }
  }
}
