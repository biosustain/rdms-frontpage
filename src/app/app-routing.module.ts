import { PdfpolicyComponent } from './components/pdfpolicy/pdfpolicy.component';
import { LimsComponent } from './components/lims/lims.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataCatalogComponent } from './components/data-catalog/data-catalog.component';
import { HomeComponent } from './components/home/home.component';
import { SoftwareCatalogComponent } from './components/software-catalog/software-catalog.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { InternalDatabasesComponent } from './components/internal-databases/internal-databases.component';
import { CfbGuidelinesComponent } from './components/policies/cfb-guidelines/cfb-guidelines.component';
import { ContactComponent } from './components/contact/contact.component';
import { DtuGuidelinesComponent } from './components/policies/dtu-guidelines/dtu-guidelines.component';
import { NationalGuidelinesComponent } from './components/policies/national-guidelines/national-guidelines.component';
import { InternationalGuidelinesComponent } from './components/policies/international-guidelines/international-guidelines.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"data-catalog", component:DataCatalogComponent},
  {path:"lims", component:LimsComponent},
  {path:"software-catalog", component:SoftwareCatalogComponent},
  {path:"policies", component:PoliciesComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"internal-databases", component:InternalDatabasesComponent},
  {path:"pdfpolicy", component:PdfpolicyComponent},
  {path:"policies/cfb-guidelines", component:CfbGuidelinesComponent},
  {path:"contact", component:ContactComponent},
  {path:"policies/dtu-guidelines", component:DtuGuidelinesComponent},
  {path:"policies/national-guidelines", component:NationalGuidelinesComponent},
  {path:"policies/international-guidelines", component:InternationalGuidelinesComponent},

  {path: '**', redirectTo: 'home', pathMatch: 'full'}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
