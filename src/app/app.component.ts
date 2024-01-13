import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public Guest = [
    { title: 'Home', url: '/Guest/index', icon: 'home' },
    { title: 'Sign up', url: '/Guest/signup', icon: 'people-circle' },
    { title: 'Sign in', url: '/Guest/signin', icon: 'person-circle' },
    // { title: 'Admin Login', url: '/Guest/adminlogin', icon: 'log-in' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public admin = [
    { title: 'Home', url: '/Admin/index', icon: 'home' },
    { title: 'Category View', url: '/Admin/categoryview', icon: 'add' },
    { title: 'Pizza Size', url: '/Admin/sizeview', icon: 'add-circle' },
    { title: 'Pizza', url: '/Admin/pizzaview', icon: 'pizza' },
    { title: 'Dessert', url: '/Admin/dessertsview', icon: 'fast-food' },
    { title: 'Request', url: '/Admin/viewpizza', icon: 'git-pull-request' },
    { title: 'Feedback', url: '/Admin/fedbackview', icon: 'podium' },
    { title: 'Reports', url: '/Admin/reports', icon: 'clipboard' },
    { title: 'Log Out', url: '/Guest/index', icon: 'warning' },
  ];

  public customer = [
    { title: 'Home', url: '/Customer/orindex', icon: 'home' },
    { title: 'My Profie', url: '/Customer/profile', icon: 'person-circle' },
    // { title: 'My cart', url: '/Customer/', icon: 'cart' },
    { title: 'My wallet', url: '/Customer/wallet', icon: 'wallet' },
    { title: 'My Carts', url: '/Customer/myrequests', icon: 'cart' },
    { title: 'Fedback', url: '/Customer/fedbackview', icon: 'podium' },

    // { title: 'Pizza', url: '/Customer/heart', icon: 'archive' },
    // { title: 'Dessert & Beverages', url: '/Customer/spam', icon: 'archive' },
    { title: 'Log Out', url: '/Guest/index', icon: 'warning' },
  ];

  public sidemenutitle='';
  public menuitems:any;
  public name:any;
  public subheading:any;




  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router: Router) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if(this.router.url.includes('Admin/'))
        {
         this.menuitems=this.admin;
         this.sidemenutitle='Admin Dashboard';
         this.subheading='Welcome Back BOSS';
        this.name='';
         
        }
        if(this.router.url.includes('Guest/'))
        {
         this.menuitems=this.Guest;
         this.sidemenutitle='Guest Dashboard';
        this.name='';

         this.subheading='Welcome FoodiezZ';
        }
        if(this.router.url.includes('Customer/'))
        {
         this.menuitems=this.customer;
       this.sidemenutitle='Customer Dashboard';
       this.subheading='Welcome';
       this.name=localStorage.getItem("customername");

        }
      }
    });
  }
}
