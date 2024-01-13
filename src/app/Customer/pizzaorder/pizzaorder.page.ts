import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-pizzaorder',
  templateUrl: './pizzaorder.page.html',
  styleUrls: ['./pizzaorder.page.scss'],
})
export class PizzaorderPage implements OnInit {
  public pizza:any[]=[];
  orderid: any;
  router: any;
  // category:any;
  // size:any;
  image:any;
  price:any;
  quantity:any;
  totalamount:any;
  formatdate:any;
  customerid:any;
  mydate:any;
  size:any;
  counter: any;


  constructor(private fb: FormBuilder, private vs:ServiceService,private route:ActivatedRoute,private router1:Router,private storage: AngularFireStorage,private datepipe:DatePipe) { 
    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.orderid = params.get('id');
    });
  }
  public pizzaorder=this.fb.group({
    pizzaname:[''],
    pizzadescription:[''],
    image:[''],
    quantity:['',Validators.maxLength(3)],
    customername:localStorage.getItem("customername"),
    // daddress:[''],
    tamount:[''],
    Price:[''], 
    sizename:[''],
    date:[''],
    customerid:localStorage.getItem("customerId"),
    requeststatus:"pending",

  })
  

  ngOnInit() {
    this.mydate=new Date();
    this.formatdate=this.datepipe.transform(this.mydate,'yyyy-MM-dd');

    this.vs.getsize().subscribe((data1:any)=>{
      this.size=data1;
      console.log(data1)
    });
  

    // this.vs.getcategory().subscribe((data:any)=>{
    //   this.category=data;
    //   console.log(data)
    // });

    // this.vs.getsize().subscribe((data1:any)=>{
    //   this.size=data1;
    //   console.log(data1)
    // });

 
    console.log(this.orderid);
    this.vs.getorderbyid(this.orderid,).subscribe(res=> {
      if (res) {
        this.pizzaorder.patchValue(res);
        this.pizza[0]=res;

      }
    });
  }


  update(){

    if (this.pizzaorder.value.quantity== "" )
    {
      alert("please fill the pizza quantity!");
     }
    
     else


    {
      console.log(this.pizzaorder);
      this.vs.orderplace(this.pizzaorder.value,this.formatdate).then(()=>
      {
        // alert("Registration completed");
        this.router1.navigate(['/Customer/myrequests']);

        // this.router.navigate(['/Customer/payment']);
      });
    }
  }

  view(){
   this.price=this.pizzaorder.value.Price;
   this.quantity=this.pizzaorder.value.quantity;
   this.totalamount=parseInt(this.price)*parseInt(this.quantity)
  // console.log();
  
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
      this.pizzaorder.controls.image.setValue(this.image);
      alert("File Uploaded");

    }
  }
}
