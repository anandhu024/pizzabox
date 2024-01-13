import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
requestlength:any;
sessionlength:any;
public rlength:any;
public pizzalength:any;
public dessertlength:any;
public fedbacklength:any;

public pending: any[]=[];
  constructor(private view:ServiceService,private route:ActivatedRoute) { }

  ngOnInit() {

    // pending reports
    this.view.getview().subscribe(res => {
      console.log(res);
      // this.pending = res;
      this.rlength=res.length;
      console.log(this.rlength);
  
  });



    // total number of pizza reports
  this.view.getpizza().subscribe(res => {
    console.log(res);
    // this.pending = res;
    this.pizzalength=res.length;
    console.log(this.pizzalength);

});


    // total number of desserts reports
    this.view.getdessert().subscribe(res => {
      console.log(res);
      // this.pending = res;
      this.dessertlength=res.length;
      console.log(this.dessertlength);
  
  });



      // total number of fedback reports
      this.view.getfeedbackreport().subscribe(res => {
        console.log(res);
        // this.pending = res;
        this.fedbacklength=res.length;
        console.log(this.fedbacklength);
    
    });
  


    this.view.getview().subscribe(res=>
      {
        console.log(res);
        // count display code ..
        this.requestlength=res.length;

    //     // this sentence only checking for count
        this.sessionlength=localStorage.getItem("sessionlength")
        if(this.sessionlength)
        {
    if(this.requestlength>this.sessionlength)
    {
      this.PlaySound();
    }}
  
    else{
    localStorage.setItem('sessionlength',this.requestlength);
    }
  console.log(localStorage.getItem("sessionlength")); 
  });

  }
  PlaySound()
  {
    let audio= new Audio;
    audio.src="../../../assets/mixkit-gaming-lock-2848.wav";
    audio.load();
    audio.play();
    alert(" New  Request ");
    localStorage.setItem('sessionlength',this.requestlength)
  }
}
