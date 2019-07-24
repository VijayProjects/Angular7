import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.compenent';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { MvvmdemoComponent } from './mvvmdemo/mvvmdemo.component';
import { ClassdemoComponent } from './classdemo/classdemo.component';
import { IteratordemoComponent } from './iteratordemo/iteratordemo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ForindexComponent } from './forindex/forindex.component';
import { FilterComponent } from './filter/filter.component';
import { DataComponent } from './data/data.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { FormstatevalidationComponent } from './formstatevalidation/formstatevalidation.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductsdataService } from './productsdata.service';
import { CaptchaService } from './captchaservice.service';
import { CaptcharegisterComponent } from './captcharegister/captcharegister.component';
import { SitehomeComponent } from './sitehome/sitehome.component';
import { AboutsiteComponent } from './aboutsite/aboutsite.component';
import { ContactsiteComponent } from './contactsite/contactsite.component';
import { NofoundComponent } from './nofound/nofound.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';
import { PreviewComponent } from './preview/preview.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    MvvmdemoComponent,
    ClassdemoComponent,
    IteratordemoComponent,
    ParentComponent,
    ChildComponent,
    ForindexComponent,
    FilterComponent,
    DataComponent,
    TemplateformComponent,
    FormstatevalidationComponent,
    ProductslistComponent,
    CaptcharegisterComponent,
    SitehomeComponent,
    AboutsiteComponent,
    ContactsiteComponent,
    NofoundComponent,
    ProductsdetailsComponent,
    PreviewComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductsdataService, CaptchaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
