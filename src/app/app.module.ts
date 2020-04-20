import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.compenent';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CourseslistComponent } from './courseslist/courseslist.component';
import { CoursesdataService } from './coursesdata.service';
import { CourseComponent } from './course/course.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { CoursepreviewComponent } from './coursepreview/coursepreview.component';
import { VegitablesdetailsComponent } from './vegitablesdetails/vegitablesdetails.component';
import { VegitabledataService } from './vegitabledata.service';
import { MidlandComponent } from './midland/midland.component';
import { MeanComponent } from './mean/mean.component';
import { HttpClientModule } from '@angular/common/http';
import { GetdataService } from './getdata.service';
import { PostdataService } from './postdata.service';
import { ModelformComponent } from './modelform/modelform.component';
import { KeydemoComponent } from './keydemo/keydemo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatInputModule, MatIconModule} from '@angular/material';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MatbuttonComponent } from './matbutton/matbutton.component';
import { MeterialModule } from './meterial/meterial.module';
import { MatbuttontoggleComponent } from './matbuttontoggle/matbuttontoggle.component';
import { MatdatepickerComponent } from './matdatepicker/matdatepicker.component';
import { MatnavbarComponent } from './matnavbar/matnavbar.component';
import { MatsidenavComponent } from './matsidenav/matsidenav.component';
import { MatformfieldComponent } from './matformfield/matformfield.component';
import { MatcardComponent } from './matcard/matcard.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { CarsdemoComponent } from './carsdemo/carsdemo.component';
import { ChangeeventComponent } from './changeevent/changeevent.component';
import { GridComponent } from './grid/grid.component';
import { GridfilterComponent } from './gridfilter/gridfilter.component';
import { DircustomeDirective } from './dircustome.directive';
import { CustomdirectiveComponent } from './customdirective/customdirective.component';
import { TitlecasePipe } from './titlecase.pipe';
import { ConfigComponent } from './config/config.component';
import { ConfigService } from './config.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualscrollingComponent } from './virtualscrolling/virtualscrolling.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertybindingComponent,
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
    PreviewComponent,
    CourseslistComponent,
    CourseComponent,
    PageNotFoundComponent,
    CoursedetailsComponent,
    CoursepreviewComponent,
    VegitablesdetailsComponent,
    MidlandComponent,
    MeanComponent,
    ModelformComponent,
    KeydemoComponent,
    AutocompleteComponent,
    MatbuttonComponent,
    MatbuttontoggleComponent,
    MatdatepickerComponent,
    MatnavbarComponent,
    MatsidenavComponent,
    MatformfieldComponent,
    MatcardComponent,
    ConditionsComponent,
    CarsdemoComponent,
    ChangeeventComponent,
    GridfilterComponent,
    GridComponent,
    DircustomeDirective,
    CustomdirectiveComponent,
    TitlecasePipe,
    ConfigComponent,
    VirtualscrollingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MeterialModule,
    ScrollingModule
  ],
  providers: [
    ProductsdataService,
    CaptchaService,
    CoursesdataService,
    VegitabledataService,
    GetdataService,
    PostdataService,
    ConfigService
  ],
  bootstrap: [CourseComponent]
})
export class AppModule { }
