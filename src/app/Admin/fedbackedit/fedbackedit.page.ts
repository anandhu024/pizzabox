import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-fedbackedit',
  templateUrl: './fedbackedit.page.html',
  styleUrls: ['./fedbackedit.page.scss'],
})
export class FedbackeditPage implements OnInit {

  public fedback:any[]=[];
  public feed:any[]=[];


  constructor(private fb: FormBuilder, private vs:ServiceService,private route:ActivatedRoute,private storage: AngularFireStorage,private router:Router) { 

    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.fedbackid = params.get('id');
    });
  }
image:any;
fedbackid:any;
  public fedbackedit=this.fb.group({

    customername:[''],
    complaint:[''],
    image:[''],
    rcomplaint:[''],
requeststatus:"Request Accepted",

    


  
    customerid:[''],

  })

  ngOnInit() {

    console.log(this.fedbackid);
    this.vs.getfedbackbyid(this.fedbackid).subscribe(res=> {
      if (res) {
        this.fedbackedit.patchValue(res);
        this.fedback[0]=res;
      }
    });
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
      this.fedbackedit.controls.image.setValue(this.image);
      alert("File Uploaded");

    }
  }

  update() {
    const data={
      complaint: this.fedback[0].complaint,
customerid: this.fedback[0].customerid,
customername:this.fedback[0].customername,
image: this.fedback[0].image,
rcomplaint:  this.fedbackedit.value.rcomplaint,
requeststatus: "Accept"

    }
    console.log(data)
    if (this.fedbackedit.value.complaint == "" || this.fedbackedit.value.rcomplaint == "" ) {
      alert("please fill in all fields");
    }
    else{

    this.vs.editfedback(this.fedbackid,data).then(() => {
     alert("sent the replay");
     this.router.navigate(['./Admin/fedbackview']);

   });
  }
  }
}
