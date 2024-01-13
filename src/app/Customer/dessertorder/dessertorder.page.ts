import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-dessertorder',
  templateUrl: './dessertorder.page.html',
  styleUrls: ['./dessertorder.page.scss'],
})
export class DessertorderPage implements OnInit {

  public dessert:any[]=[];
  orderid: any;
  router: any;
  price:any;
  quantity:any;
  totalamount:any;
  formatdate1:any;
  customerid:any;
  mydate:any;

  constructor(private fb: FormBuilder, private vs:ServiceService,private route:ActivatedRoute,private date:DatePipe,private router1:Router,private storage: AngularFireStorage) { 

    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.orderid = params.get('id');
    });
  }
image:any;
  public dessertorder=this.fb.group({
    dessertname:[''],
    dessertsdescription:[''],
    image:[''],
    dessertsprice:[''],
    date:[''],
    dessertsquantity:[''],
    dessertsaddress:[''],
    dessertsamount:[''],
    customername:localStorage.getItem("customername"),
    requeststatus:"pending",
    customerid:localStorage.getItem("customerId"),

  })

  ngOnInit() {

    this.mydate=new Date();
    this.formatdate1=this.date.transform(this.mydate,'yyyy-MM-dd');

    console.log(this.orderid);
    this.vs.getorderdessertbyid(this.orderid).subscribe(res=> {
      if (res) {
        this.dessertorder.patchValue(res);
        this.dessert[0]=res;
      }
    });
  }



  order(){

    if (this.dessertorder.value.dessertsquantity == "")
    {
      alert("please fill the Desserts Quantity!");
     }
     else



    {
      console.log(this.dessertorder.value);
      this.vs.orderplacedessert(this.dessertorder.value,this.formatdate1).then(()=>
      {
        // alert("Registration completed");
        this.router1.navigate(['/Customer/myrequests']);

        // this.router.navigate(['/Admin/']);
      });
    }

  }
  view(){
    this.price=this.dessertorder.value.dessertsprice;
    this.quantity=this.dessertorder.value.dessertsquantity;
    this.totalamount=parseInt(this.price)*parseInt(this.quantity)
   // console.log();
   
   }
  //  pass()
  //  {
  //        this.router1.navigate(['/Customer/payment', this.dessertorder.value.dessertsamount]);
 
  //  }

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
      this.dessertorder.controls.image.setValue(this.image);
      alert("File Uploaded");

    }
  }
}
