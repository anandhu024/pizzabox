import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.page.html',
  styleUrls: ['./pizza.page.scss'],
})
export class PizzaPage implements OnInit {
  category:any;
  size:any;
  image: any;

  constructor(private fb:FormBuilder,private rs:ServiceService,private router:Router, private storage:AngularFireStorage) { }
  public pizzareg=this.fb.group({
    pizzaname:[''],
    pizzadescription:[''],
    image:[''],
    categoryname:[''],
    sizename:[''],
    Price:[''],
  })

  ngOnInit() {
    this.rs.getcategory().subscribe((data:any)=>{
      this.category=data;
      console.log(data)
    });

    this.rs.getsize().subscribe((data1:any)=>{
      this.size=data1;
      console.log(data1)
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
      this.pizzareg.controls.image.setValue(this.image);
      alert("File Uploaded");

    }
  }

  submit()
  {
    if (this.pizzareg.value.pizzaname == "" || 
    this.pizzareg.value.pizzadescription == "" || 
    this.pizzareg.value.image == "" || 
    this.pizzareg.value.categoryname == "" || 
    this.pizzareg.value.sizename == "" || 
    this.pizzareg.value.Price == "")
    {
      alert("please fill in all fields");
     }
     else{
    console.log(this.pizzareg.value);
    this.rs.addpizza(this.pizzareg.value).then(()=>
    {
      alert("Registration completed");
      this.router.navigate(['/Admin/pizzaview']);
    });
  }
}

}
