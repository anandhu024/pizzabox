import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private afs:AngularFirestore) { }
  // Adminlogin
  adminlogin(username:any,password:any)
  {
    console.log(username);
    console.log(password);
    return this.afs.collection('collection_adminlogin',(ref)=>ref.where("username","==",username).where("password","==",password))
    .valueChanges({idField:"collection_adminloginId"});
  }

  // Category adding services
  addcategory(categoryData:any){

    const categoryDatas=JSON.parse(JSON.stringify(categoryData));
    return this.afs.collection("collection_category").add(categoryDatas);
  }

  // Category view page services
  getcategory()
  {
    const categorydata=this.afs.collection("collection_category").valueChanges({idField:"collection_categoryId"});
    return categorydata;
  }

  // Category delete services 
  deleteproduct(Id:string){
    console.log(Id);
    return this.afs.doc("collection_category/"+Id).delete();
  }


    // Pizza size adding services
    addsize(sizeData:any){

      const sizeDatas=JSON.parse(JSON.stringify(sizeData));
      return this.afs.collection("collection_size").add(sizeDatas);
    }

   //Pizza size view page services
  getsize()
  {
    const sizedata=this.afs.collection("collection_size").valueChanges({idField:"collection_sizeId"});
    return sizedata;
  }


    //Size delete services 
    deletesize(Id:string){
      console.log(Id);
      return this.afs.doc("collection_size/"+Id).delete();
    }


        //Desserts adding services
        adddessert(dessertData:any){

          const dessertDatas=JSON.parse(JSON.stringify(dessertData));
          return this.afs.collection("collection_dessert").add(dessertDatas);
        }


      //Dessert view page services
      getdessert()
       {
         const dessertdata=this.afs.collection("collection_dessert").valueChanges({idField:"collection_dessertId"});
         return dessertdata;
        }


    //dessert delete services 
    deletedessert(Id:string){
      console.log(Id);
      return this.afs.doc("collection_dessert/"+Id).delete();
    }

      // dessert edit service 
    editdessert(dessertid:any,dessertedit:any){
      return this.afs.doc("collection_dessert/" +dessertid).update(dessertedit);
    }


        

    // dessert edit id services
    getdessertbyid(requestid: any) 
    {
      const requestData = this.afs.doc<any>("collection_dessert/" + requestid).valueChanges();
  
      return requestData;
    }

        // fedback edit id services
        getfedbackbyid(requestid: any) 
        {
          const requestData = this.afs.doc<any>("collection_fedback/" + requestid).valueChanges();
      
          return requestData;
        }


    //Pizza adding services
    addpizza(pizzaData:any){

      const pizzaDatas=JSON.parse(JSON.stringify(pizzaData));
      return this.afs.collection("collection_pizza").add(pizzaDatas);
    }


    //Pizza view page services
    getpizza()
    {
      const pizzadata=this.afs.collection("collection_pizza").valueChanges({idField:"collection_pizzaId"});
      return pizzadata;
     }


    //pizza delete services 
    deletepizza(Id:string){
      console.log(Id);
      return this.afs.doc("collection_pizza/"+Id).delete();
    }


    // pizza edit service 
    editpizza(pizzaid:any,pizzaedit:any){
      return this.afs.doc("collection_pizza/" +pizzaid).update(pizzaedit);
    }


    //pizza edit id services
    getpizzabyid(requestid: any) 
    {
      const requestData = this.afs.doc<any>("collection_pizza/" + requestid).valueChanges();
  
      return requestData;
    }

    //Sign up customer services
    addsignup(signupData:any){

      const signupDatas=JSON.parse(JSON.stringify(signupData));
      return this.afs.collection("collection_signup").add(signupDatas);
    }


    //Sign up customer services
    customervalidation( email: any) {
      // console.log(username);
      // console.log(password);
      return this.afs.collection('collection_signup', (ref) => ref.where("email", "==", email))
        .valueChanges({ idField: "collection_signupId" });

        // const acceptdata= this.afs.doc("collection_signup/" + number).valueChanges({ idField: "collection_signupId" })
        // const rejectdata= this.afs.doc("collection_signupId/" + email).valueChanges({ idField: "collection_signupId" })
        // return acceptdata;
        // return rejectdata;
    }

       // Validation for category
       customervalidation1(name: any) {
        console.log(name);
        // console.log(password
        return this.afs.collection('collection_category', (ref) => ref.where("categoryname", "==", name))
          .valueChanges({ idField: "collection_categoryId" });
  
          // const acceptdata= this.afs.doc("collection_signup/" + number).valueChanges({ idField: "collection_signupId" })
          // const rejectdata= this.afs.doc("collection_signupId/" + email).valueChanges({ idField: "collection_signupId" })
          // return acceptdata;
          // return rejectdata;
      }

       // Validation for pizza size
       customervalidation2(name: any) {
        console.log(name);
        // console.log(password
        return this.afs.collection('collection_size', (ref) => ref.where("Size", "==", name))
          .valueChanges({ idField: "collection_sizeId" });
       }

      // Customerlogin
  customerlogin(email:any,password:any)
  {
    console.log(email);
    console.log(password);
    return this.afs.collection('collection_signup',(ref)=>ref.where("email","==",email).where("password","==",password))
    .valueChanges({idField:"collection_signupId"});
  }

  // profile session use calling view
  getprofile(name:any)
  {
    const profiledata=this.afs.collection("collection_signup",(ref)=>ref.where("name","==",name)).valueChanges({idField:"collection_signupId"});
    return profiledata;
  }

      // signup edit service 
      editsignup(customerid:any,customeredit:any){
        return this.afs.doc("collection_signup/" +customerid).update(customeredit);
      }
  
  
      //signup edit id services
      getsignupbyid(requestid: any) 
      {
        const requestData = this.afs.doc<any>("collection_signup/" + requestid).valueChanges();
    
        return requestData;
      }

// index of pizza page drop down
      getpizzabycatagoery(catagoery:any,sizename:any){
        const pizzadata=this.afs.collection('collection_pizza',(ref)=>ref.where("categoryname","==",catagoery).where("sizename","==",sizename))
        .valueChanges({idField:"collection_pizzaId"});
        return pizzadata;
      }
      

          //pizza order place id services
    getorderbyid(requestid: any) 
    {
      const requestData = this.afs.doc<any>("collection_pizza/" + requestid).valueChanges();
  
      return requestData;
    }

        //Order placeing  pizza services
        orderplace(orderData:any,date:any){
          const orderdata1 ={
            formatdate:date,
            itemname:orderData.pizzaname,
            // daddress:orderData.daddress,
            image:orderData.image,
            itemdescription:orderData.pizzadescription,
            itemquantity:orderData.quantity,
            requeststatus:orderData.requeststatus,
            itemamount:orderData.tamount,
            itemprice:orderData.Price,
            customername:orderData.customername,
            customerId:orderData.customerid,
            itemsize:orderData.sizename,
            title:"Pizza Order",

          }
          
console.log(orderdata1);
          const orderdate2=JSON.parse(JSON.stringify(orderdata1));
          return this.afs.collection("collection_requests").add(orderdate2);
        }


        //fedbackform
        fedback(data:any){
          const date2=JSON.parse(JSON.stringify(data));
          return this.afs.collection("collection_fedback").add(date2);
        }

                  //dessert order place id services
    getorderdessertbyid(requestid: any) 
    {
      const requestData = this.afs.doc<any>("collection_dessert/" + requestid).valueChanges();
  
      return requestData;
    }

        //Order placeing  dessert services
        orderplacedessert(orderData:any,date:any){
          const orderdata1 ={
            formatdate:date,
            itemname:orderData.dessertname,
            // dessertsaddress:orderData.dessertsaddress,
            image:orderData.image,
            itemdescription:orderData.dessertsdescription,
            itemquantity:orderData.dessertsquantity,
            requeststatus:orderData.requeststatus,
            itemamount:orderData.dessertsamount,
            itemprice:orderData.dessertsprice,
            customername:orderData.customername,
            customerId:orderData.customerid,
            title:"Dessert Order",
            itemsize:"Normal"
          }

          const orderDatas=JSON.parse(JSON.stringify(orderdata1));
          return this.afs.collection("collection_requests").add(orderDatas);
        }
        requestaccept(requestId:any,requestData:any,delivery:any)
        {
          const orderdata1 ={
          formatdate:requestData.formatdate,
          itemname:requestData.itemname,
          // dessertsaddress:orderData.dessertsaddress,
          image:requestData.image,
          itemdescription:requestData.itemdescription,
          itemquantity:requestData.itemquantity,
          requeststatus:"Request Accepted",
          itemamount:requestData.itemamount,
          itemprice:requestData.itemprice,
          customername:requestData.customername,
          customerId:requestData.customerId,
          itemdeliveryaddress:delivery,
          title:"Dessert Order",
          itemsize:"Normal"
          }
        return this.afs.doc("collection_requests/" + requestId).update(orderdata1);
          
        }

        getcustomerbyid(customerId: any) {
          console.log(customerId);
          const customerData = this.afs.doc<any>("collection_signup/" + customerId).valueChanges();
          return customerData;
        }


        getproductbyid(productId: any) {
          const productData = this.afs.doc<any>("collection_requests/" + productId).valueChanges();
          return productData;
        }

        addpayment(paymentData:any){
          // const payment={
          //   paymentamount:paymentamount,
          //   customername:paymentData.customername, 
          //   cardtype:paymentData.cardtype, 
          //   formatdate:formatdate,
          //   customerId:paymentData.customerid,
          //   status:"Payment Completed",
          // }
          const paymentDatas=JSON.parse(JSON.stringify(paymentData));
          return this.afs.collection("collection_wallet").add(paymentDatas);
        }

           // admin  view page services
  getview()
  {
    const paymentdata=this.afs.collection("collection_requests",(ref)=>ref.where("requeststatus","==","Request Accepted")).valueChanges({idField:"collection_requestsId"});
    return paymentdata;
  }

             // admin page payment view services
             getpayment(name:any)
             {
               const paymentdata=this.afs.collection("collection_payment",(ref)=>ref.where("customerId","==",name)).valueChanges({idField:"collection_paymentId"});
               return paymentdata;
             }


                   //Admin view more page services
      getpizzarequest(id:any)
      {
        console.log(id)
        const requestData = this.afs.collection('collection_requests',(ref)=>ref.where("customerId","==",id).where("formatdate","==",localStorage.getItem("formatdate")).where("requeststatus","==","Request Accepted")).valueChanges({idField:"collection_requestsId"});
  
        return requestData;
       }


      //  acceptreq(name:any,date:any){
      //   const requestDatas={
      //     status:"Request Accepted"
      //   }
      //   return this.afs.doc("collection_pizzarequest/",(ref)=>ref.where("customername","==",name).where("formatdate","==",date)).update(requestDatas);
      //  }

// accept admin side request
      acceptrequest(requestId:any,drequest:any){
        const acceptdata= this.afs.doc("collection_requests/" + requestId).update({requeststatus:"Verified"})
        const rejectdata= this.afs.doc("collection_requests/" + drequest).update({requeststatus:"Verified"})
        return acceptdata;
        return rejectdata;
      }

      
// admin side accept
      acceptrequest1(id:any){
        return this.afs.doc("collection_requests/" + id).update({requeststatus:"Verified"})
      }
      // admin side accept
      rejectrequest1(id:any){
        return this.afs.doc("collection_requests/" + id).update({requeststatus:"Request Rejected"})
      }

      // reject admin side request
      rejectrequest(requestId:any,requestId1:any){
        // return this.afs.doc("collection_requests/" + requestId1).update({requeststatus:"Request Rejected"})
        const acceptdata= this.afs.doc("collection_requests/" + requestId).update({requeststatus:"Request Rejected"})
        const rejectdata= this.afs.doc("collection_requests/" + requestId1).update({requeststatus:"Request Rejected"})
        return acceptdata;
        return rejectdata;
      }

        // admin dropdown view page services
  getrequest()
  {
    const categorydata=this.afs.collection("collection_requests").valueChanges({idField:"collection_requestsId"});
    return categorydata;
  }

// admin of  page drop down
dropdown(catagoery:any){
  const pizzadata=this.afs.collection('collection_requests',(ref)=>ref.where("title","==",catagoery))
  .valueChanges({idField:"collection_requestsId"});
  return pizzadata;
}



// customer side pending request view
getmyreq(){
  // const requestdata = this.afs.doc<any>("collection_requests/" + id).valueChanges();
  const requestdata = this.afs.collection('collection_requests',(ref) => ref.where("requeststatus", "==", "pending")
  .where("customerId", "==", localStorage.getItem("customerId"))).valueChanges({ idField: "collection_requestsId" });
  // console.log(categorydata);
  return requestdata;
}


// accepted customer request
getmyacceptedrequest(){
  const requestdata = this.afs.collection('collection_requests',(ref) => ref.where("requeststatus", "==", "Request Accepted").where("customerId", "==", localStorage.getItem("customerId"))).valueChanges({ idField: "collection_requestsId" });
  // console.log(categorydata);
  return requestdata;
}



// rejected customer request
getmyrejectedreq(){
  const shopdata = this.afs.collection('collection_requests',(ref) => ref.where("requeststatus", "==", "Request Rejected").where("customerId", "==", localStorage.getItem("customerId"))).valueChanges({ idField: "collection_requestsId" });
  // console.log(categorydata);
  return shopdata;
}





updatewallet(walletid:any,walletdata:any){
  return this.afs.doc("collection_wallet/" +walletid).update(walletdata);
}
getwalletbycusomerid(cusomerid:any)
{
  const shopdata = this.afs.collection('collection_wallet',(ref) => ref.where("customerid", "==",cusomerid)).valueChanges({ idField: "collection_walletId" });
  console.log(shopdata);
  return shopdata;
}

      //Wallet view page services
      getwallet(cusomerid:any)
       {
         const walletdata=this.afs.collection("collection_wallet",(ref) => ref.where("customerid", "==", cusomerid)).valueChanges({idField:"collection_walletId"});
         return walletdata;
        }


         // Feedback view page services
  getfeedback()
  {
    const data=this.afs.collection("collection_fedback",(ref) => ref.where("customerid", "==", localStorage.getItem("customerId"))).valueChanges({idField:"collection_fedbackId"});
    return data;
  }

           // Feedback view page  admin services
           getfeedbackadmin()
           {
             const data=this.afs.collection("collection_fedback",(ref) => ref.where("requeststatus", "==", "pending")).valueChanges({idField:"collection_fedbackId"});
             return data;
           }

//Customer reports
           getcust()
{
  const sizedata=this.afs.collection("collection_signup").valueChanges({idField:"collection_signupId"});
  return sizedata;
}

  // Feedback view page  admin services
  getfeedbackreport()
  {
    const data=this.afs.collection("collection_fedback").valueChanges({idField:"collection_fedbackId"});
    return data;
  }

  // accepted customer reports
getacceptedreportt(){
  const requestdata = this.afs.collection('collection_requests',(ref) => ref.where("requeststatus", "==", "Verified")).valueChanges({ idField: "collection_requestsId" });
  // console.log(categorydata);
  return requestdata;
}

// rejected customer request
getrejectedreport(){
  const shopdata = this.afs.collection('collection_requests',(ref) => ref.where("requeststatus", "==", "Request Rejected")).valueChanges({ idField: "collection_requestsId" });
  // console.log(categorydata);
  return shopdata;
}

  // fedback edit service 
  editfedback(fedbackid:any,fedbackedit:any){
    return this.afs.doc("collection_fedback/" +fedbackid).update(fedbackedit);
  }

  deleteorder(orderid:any)
{
  return this.afs.doc("collection_requests/" +orderid).delete();

}


getfeedbackreportt(){
  const requestdata = this.afs.collection('collection_fedback',(ref) => ref.where("requeststatus", "==", "Accept")).valueChanges({ idField: "collection_fedbackId" });
  // console.log(categorydata);
  return requestdata;
}


getincomeview()
{
  const paymentdata=this.afs.collection("collection_requests",(ref)=>ref.where("requeststatus","==","Request Accepted").where("customerId", "==", localStorage.getItem("customerId"))).valueChanges({idField:"collection_requestsId"});
  return paymentdata;
}

getincomereject(){
  const shopdata = this.afs.collection('collection_requests',(ref) => ref.where("requeststatus", "==", "Request Rejected").where("customerId", "==", localStorage.getItem("customerId"))).valueChanges({ idField: "collection_requestsId" });
  // console.log(categorydata);
  return shopdata;
}

}
