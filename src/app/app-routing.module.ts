import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitehomeComponent } from './sitehome/sitehome.component';
import { AboutsiteComponent } from './aboutsite/aboutsite.component';
import { ContactsiteComponent } from './contactsite/contactsite.component';
import { NofoundComponent } from './nofound/nofound.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';
import { PreviewComponent } from './preview/preview.component';
import { CourseslistComponent } from './courseslist/courseslist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { CoursepreviewComponent } from './coursepreview/coursepreview.component';
import { VegitablesdetailsComponent } from './vegitablesdetails/vegitablesdetails.component';

const routes: Routes = [
  {path: 'home', component: SitehomeComponent},
  {path: 'about', component: AboutsiteComponent},
  {path: 'contact', component: ContactsiteComponent},
  {path: 'products', component: ProductslistComponent},
  {path: 'products/:id', component: ProductsdetailsComponent,
    children: [
      {path: 'preview/:id', component: PreviewComponent}
    ]
  },
  {path: 'courses', component: CourseslistComponent},
  {path: 'courses/:id', component: CoursedetailsComponent,
    children: [
      {path: 'coursePreview/:id', component: CoursepreviewComponent}
    ]
  },
  {path: 'vegitables', component: VegitablesdetailsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
