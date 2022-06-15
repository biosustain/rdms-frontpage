import { LimsComponent } from './components/lims/lims.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataCatalogComponent } from './components/data-catalog/data-catalog.component';
import { HomeComponent } from './components/home/home.component';
import { SoftwareCatalogComponent } from './components/software-catalog/software-catalog.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { InternalDatabasesComponent } from './components/internal-databases/internal-databases.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"data-catalog", component:DataCatalogComponent},
  {path:"lims", component:LimsComponent},
  {path:"software-catalog", component:SoftwareCatalogComponent},
  {path:"policies", component:PoliciesComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"internal-databases", component:InternalDatabasesComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
