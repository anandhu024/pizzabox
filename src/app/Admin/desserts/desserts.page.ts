import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.page.html',
  styleUrls: ['./desserts.page.scss'],
})
export class DessertsPage implements OnInit {

  constructor(private fb:FormBuilder,private rs:ServiceService,private router:Router,private storage: AngularFireStorage) { }
  image: any;
  public dessertreg=this.fb.group({
    dessertname:[''],
    dessertsdescription:[''],
    image:[''],
    dessertsprice:['']
  })

  ngOnInit() {
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
      this.dessertreg.controls.image.setValue(this.image);
      alert("File Uploaded");

    }
  }

  submit()
  {
    if (this.dessertreg.value.dessertname == "" || this.dessertreg.value.dessertsdescription == "" || this.dessertreg.value.image == "" || this.dessertreg.value.dessertsprice == "")
    {
      alert("please fill in all fields");
     }
     else{
    console.log(this.dessertreg.value);
    this.rs.adddessert(this.dessertreg.value).then(()=>
    {
      alert("Registration completed");
      this.router.navigate(['/Admin/dessertsview']);
    });
  }
}

}
