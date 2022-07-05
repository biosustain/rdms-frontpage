import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import {MatListModule} from '@angular/material/list';
import { LimsComponent } from './components/lims/lims.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataCatalogComponent } from './components/data-catalog/data-catalog.component';
import { SoftwareCatalogComponent } from './components/software-catalog/software-catalog.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { InternalDatabasesComponent } from './components/internal-databases/internal-databases.component';
import { DataAnalysisComponent } from './components/data-analysis/data-analysis.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { PdfpolicyComponent } from './components/pdfpolicy/pdfpolicy.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { CfbGuidelinesComponent } from './components/policies/cfb-guidelines.component';
import { ContactComponent } from './components/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LimsComponent,
    DashboardComponent,
    DataCatalogComponent,
    SoftwareCatalogComponent,
    NavbarComponent,
    PoliciesComponent,
    InternalDatabasesComponent,
    DataAnalysisComponent,
    PdfpolicyComponent,
    CfbGuidelinesComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatExpansionModule,
    MatCardModule,
    NgxExtendedPdfViewerModule,
    PdfViewerModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
