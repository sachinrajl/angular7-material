import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplianceDashboardComponent } from './compliance-dashboard/compliance-dashboard.component';


const routes: Routes = [
  //the empty path will be redirected to the home component
  {path:'',redirectTo: '/dashboard', pathMatch: 'full'},

  {path:'dashboard', component:ComplianceDashboardComponent},
  
  //this path redirects to the home component
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
