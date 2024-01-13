import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-fedback',
  templateUrl: './fedback.page.html',
  styleUrls: ['./fedback.page.scss'],
})
export class FedbackPage implements OnInit {

  constructor(private fb: FormBuilder, private vs:ServiceService,private route:ActivatedRoute,private storage: AngularFireStorage,private router:Router) { }
image:any;
  public fedback=this.fb.group({

    customername:localStorage.getItem("customername"),
    complaint:['',Validators.required],
    image:['',Validators.required],
rcomplaint:[''],
requeststatus:['pending'],
  
    customerid:localStorage.getItem("customerId"),

  })

  ngOnInit() {
  }

  upload(file :any) {
    const path = `Complaints/${Date.now()}_${file.name}`;
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
      this.fedback.controls.image.setValue(this.image);
      alert("File Uploaded");

    }
  }


  update(){
    if (this.fedback.value.complaint == "" || this.fedback.value.image == "" ) {
      alert("please fill in all fields");
    }
    else{
    console.log(this.fedback.value);
    this.vs.fedback(this.fedback.value).then(()=>
    {
      alert("Complaint send to the Admin please wait for the reply!!");
      this.router.navigate(['/Customer/fedbackview']);
    });
  }
  }
}
