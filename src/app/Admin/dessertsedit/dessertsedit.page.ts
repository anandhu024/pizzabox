import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-dessertsedit',
  templateUrl: './dessertsedit.page.html',
  styleUrls: ['./dessertsedit.page.scss'],
})
export class DessertseditPage implements OnInit {
  public dessert:any[]=[];
  dessertid: any;
  router: any;

  constructor(private fb: FormBuilder, private vs:ServiceService,private route:ActivatedRoute,private router1:Router,private storage: AngularFireStorage) { 

    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.dessertid = params.get('id');
    });
  }
image:any;
  public dessertedit=this.fb.group({
    dessertname:[''],
    dessertsdescription:[''],
    image:[''],
    dessertsprice:['']
  })

  ngOnInit() {
    console.log(this.dessertid);
    this.vs.getdessertbyid(this.dessertid).subscribe(res=> {
      if (res) {
        this.dessertedit.patchValue(res);
        this.dessert[0]=res;
      }
    });
  }

  upload(file :any) {
    const path = `Desserts/${Date.now()}_${file.name}`;
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
      this.dessertedit.controls.image.setValue(this.image);
      alert("File Uploaded");

    }
  }

  update() {
    if (this.dessertedit.value.dessertname == "" || this.dessertedit.value.dessertsdescription == "" || this.dessertedit.value.image == "" || this.dessertedit.value.dessertsprice == "")
    {
      alert("please fill in all fields");
     }
     else{
    this.vs.editdessert(this.dessertid, this.dessertedit.value).then(() => {
     alert("Desserts Updated");
     this.router1.navigate(['./Admin/dessertsview']);

   });
  }
  }

}
