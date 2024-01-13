import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Guest/index',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'Guest/index',
    loadChildren: () => import('./Guest/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'Guest/signup',
    loadChildren: () => import('./Guest/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'Guest/signin',
    loadChildren: () => import('./Guest/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'Guest/adminlogin',
    loadChildren: () => import('./Guest/adminlogin/adminlogin.module').then( m => m.AdminloginPageModule)
  },
  {
    path: 'Admin/index',
    loadChildren: () => import('./Admin/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'Customer/index',
    loadChildren: () => import('./Customer/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'Admin/category',
    loadChildren: () => import('./Admin/category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'Admin/categoryview',
    loadChildren: () => import('./Admin/categoryview/categoryview.module').then( m => m.CategoryviewPageModule)
  },
  {
    path: 'Admin/size',
    loadChildren: () => import('./Admin/size/size.module').then( m => m.SizePageModule)
  },
  {
    path: 'Admin/sizeview',
    loadChildren: () => import('./Admin/sizeview/sizeview.module').then( m => m.SizeviewPageModule)
  },
  {
    path: 'Admin/desserts',
    loadChildren: () => import('./Admin/desserts/desserts.module').then( m => m.DessertsPageModule)
  },
  {
    path: 'Admin/dessertsview',
    loadChildren: () => import('./Admin/dessertsview/dessertsview.module').then( m => m.DessertsviewPageModule)
  },
  {
    path: 'Admin/dessertsedit/:id',
    loadChildren: () => import('./Admin/dessertsedit/dessertsedit.module').then( m => m.DessertseditPageModule)
  },
  {
    path: 'Admin/pizza',
    loadChildren: () => import('./Admin/pizza/pizza.module').then( m => m.PizzaPageModule)
  },
  {
    path: 'Admin/pizzaview',
    loadChildren: () => import('./Admin/pizzaview/pizzaview.module').then( m => m.PizzaviewPageModule)
  },
  {
    path: 'Admin/pizzaedit/:id',
    loadChildren: () => import('./Admin/pizzaedit/pizzaedit.module').then( m => m.PizzaeditPageModule)
  },
  {
    path: 'Customer/profile',
    loadChildren: () => import('./Customer/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'Customer/profileedit/:id',
    loadChildren: () => import('./Customer/profileedit/profileedit.module').then( m => m.ProfileeditPageModule)
  },
  {
    path: 'Customer/desertindex',
    loadChildren: () => import('./Customer/desertindex/desertindex.module').then( m => m.DesertindexPageModule)
  },
  {
    path: 'Customer/pizzaorder/:id',
    loadChildren: () => import('./Customer/pizzaorder/pizzaorder.module').then( m => m.PizzaorderPageModule)
  },
  {
    path: 'Customer/dessertorder/:id',
    loadChildren: () => import('./Customer/dessertorder/dessertorder.module').then( m => m.DessertorderPageModule)
  },
  {
    path: 'Customer/payment',
    loadChildren: () => import('./Customer/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'Admin/viewpizza',
    loadChildren: () => import('./Admin/viewpizza/viewpizza.module').then( m => m.ViewpizzaPageModule)
  },
  {
    path: 'Admin/viewmorepizza/:id',
    loadChildren: () => import('./Admin/viewmorepizza/viewmorepizza.module').then( m => m.ViewmorepizzaPageModule)
  },
  {
    path: 'Admin/payment/:id',
    loadChildren: () => import('./Admin/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'Customer/myrequests',
    loadChildren: () => import('./Customer/myrequests/myrequests.module').then( m => m.MyrequestsPageModule)
  },
  {
    path: 'Customer/acceptrequests',
    loadChildren: () => import('./Customer/acceptrequests/acceptrequests.module').then( m => m.AcceptrequestsPageModule)
  },
  {
    path: 'Customer/rejectrequests',
    loadChildren: () => import('./Customer/rejectrequests/rejectrequests.module').then( m => m.RejectrequestsPageModule)
  },
  {
    path: 'Customer/orindex',
    loadChildren: () => import('./Customer/orindex/orindex.module').then( m => m.OrindexPageModule)
  },
  {
    path: 'Customer/view/:id',
    loadChildren: () => import('./Customer/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'Customer/delivery',
    loadChildren: () => import('./Customer/delivery/delivery.module').then( m => m.DeliveryPageModule)
  },
  {
    path: 'Customer/fedback',
    loadChildren: () => import('./Customer/fedback/fedback.module').then( m => m.FedbackPageModule)
  },
  {
    path: 'Customer/wallet',
    loadChildren: () => import('./Customer/wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'Customer/fedbackview',
    loadChildren: () => import('./Customer/fedbackview/fedbackview.module').then( m => m.FedbackviewPageModule)
  },
  {
    path: 'Admin/fedbackedit/:id',
    loadChildren: () => import('./Admin/fedbackedit/fedbackedit.module').then( m => m.FedbackeditPageModule)
  },
  {
    path: 'Admin/fedbackview',
    loadChildren: () => import('./Admin/fedbackview/fedbackview.module').then( m => m.FedbackviewPageModule)
  },
  {
    path: 'Admin/reports',
    loadChildren: () => import('./Admin/reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'Admin/customerreport',
    loadChildren: () => import('./Admin/customerreport/customerreport.module').then( m => m.CustomerreportPageModule)
  },
  {
    path: 'Admin/reportaccept',
    loadChildren: () => import('./Admin/reportaccept/reportaccept.module').then( m => m.ReportacceptPageModule)
  },
  {
    path: 'Admin/reportreject',
    loadChildren: () => import('./Admin/reportreject/reportreject.module').then( m => m.ReportrejectPageModule)
  },
  {
    path: 'Admin/reportdate',
    loadChildren: () => import('./Admin/reportdate/reportdate.module').then( m => m.ReportdatePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
