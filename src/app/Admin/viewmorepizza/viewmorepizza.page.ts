import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-viewmorepizza',
  templateUrl: './viewmorepizza.page.html',
  styleUrls: ['./viewmorepizza.page.scss'],
})
export class ViewmorepizzaPage  {

  public pizza:any[]=[];
  public Dessert:any[]=[];
  public data:any[]=[];
  de=false;
  totalamount=0;
  pi=false;
  customerid:any;
date:any;
  wallet:any;
  image:any;
  amount: any;
  walletid: any; 
  amount1: any;
  customername: any;
  constructor(private view:ServiceService,private route:ActivatedRoute,private router:Router,private fb:FormBuilder,private storage: AngularFireStorage) {
    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.customerid = params.get('id');
    });
   }
   public viewmore=this.fb.group({
    dessertname:[''],
    pdescription:[''],
    image:[''],
    pquantity:[''],
    // customername:localStorage.getItem("customername"),
    daddress:[''],
    ptamount:[''],
    Price:[''], 
    pdate:[''],
    // customerid:localStorage.getItem("customerId"),
    // requeststatus:"pending",

  })

  ionViewDidEnter() {
    this.view.getpizzarequest(this.customerid)
    .pipe(take(1))
    .subscribe(res=>
      {
        console.log(res);
        this.data=res;
        for(let i=0;i<=res.length-1;i++)
        {
        console.log(this.data[i].itemamount);

          this.totalamount=this.totalamount+parseInt(this.data[i].itemamount);
        }
        console.log(this.totalamount);
        this.customername=this.data[0].customername;
        if(res.length>1)
        {
          this.pizza[0]=res[0];
          this.Dessert[0]=res[1]; 
          console.log(this.pizza);
          console.log(this.Dessert);
           
        } 
        else if(this.data[0].title=="Pizza Order")
        {
          this.pizza[0]=res[0];
          console.log(this.pizza);
        }
        else if(this.data[0].title=="Dessert Order")
        {
          this.Dessert[0]=res[0];
          console.log(this.Dessert);

        } 
      });
  } 
  // viewmore1(){

  // }


  accept(){
    console.log(this.data[0].title);
    if(confirm("you want to accept?")){

//console.log(this.pizza[0].collection_requestsId);
console.log(this.pizza[0]);
      if(this.pizza.length>0 && this.Dessert.length>0)
      {
        this.view.acceptrequest(this.pizza[0].collection_requestsId,this.Dessert[0].collection_requestsId).then((error:any)=>
      
        console.error(error));
       
      }
     else if(this.data[0].title=="Pizza Order")
        {
          console.log("hi");
          console.log(this.pizza[0].collection_requestsId);
          this.view.acceptrequest1(this.pizza[0].collection_requestsId).then((error:any)=>
        
          console.error(error));
        } 
        else if(this.data[0].title=="Dessert Order")
        {
          console.log("hii");
          console.log(this.data[0].collection_requestsId);
          this.view.acceptrequest1(this.data[0].collection_requestsId).then((error:any)=>
        
          console.error(error));
        }
      this.router.navigate(['/Admin/viewpizza']);

    }


  }

  reject(){
    if(confirm("you want to reject?")){
      console.log(this.pizza[0]);
      if(this.pizza.length>0 && this.Dessert.length>0)
      {
        this.view.rejectrequest(this.pizza[0].collection_requestsId,this.Dessert[0].collection_requestsId).then((error:any)=>
      
        console.error(error));
       
      }
     else if(this.data[0].title=="Pizza Order")
        {
          console.log("hi");
          console.log(this.pizza[0].collection_requestsId);
          this.view.rejectrequest1(this.pizza[0].collection_requestsId).then((error:any)=>
        
          console.error(error));
        } 
        else if(this.data[0].title=="Dessert Order")
        {
          console.log("hii");
          console.log(this.data[0].collection_requestsId);
          this.view.rejectrequest1(this.data[0].collection_requestsId).then((error:any)=>
        
          console.error(error));
        }

    }



    this.view.getwalletbycusomerid(this.customerid)
    .pipe(take(1))
    .subscribe(res=>
      {
        console.log(res);
        this.wallet=res;
        this.amount=this.wallet[0].amount;
    console.log(this.wallet[0].amount);
   
        this.walletid=res[0].collection_walletId;
    const a=this.totalamount
    const b=this.wallet[0].amount
          this.amount1=this.amount+this.totalamount;
    console.log(b)
    console.log(this.amount)
    console.log(this.amount1)
          const data={
            customername:this.customername, 
          customerid:this.customerid,
          amount :this.amount1,
          }
          this.view.updatewallet(this.walletid,data).then(()=>
          {
            this.router.navigate(['/Admin/viewpizza']);


          });
        
      });
    
    
      






  }

  request(){

    localStorage.setItem('formatdate',this.data[0].formatDate);
    localStorage.setItem('customerId',this.data[0].customerId);
        this.router.navigate(['/Admin/payment',this.data[0].customerId ]);

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
      this.viewmore.controls.image.setValue(this.image);
      alert("File Uploaded");

    }
  }

}
