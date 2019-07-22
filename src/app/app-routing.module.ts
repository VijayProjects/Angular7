import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitehomeComponent } from './sitehome/sitehome.component';
import { AboutsiteComponent } from './aboutsite/aboutsite.component';
import { ContactsiteComponent } from './contactsite/contactsite.component';
import { NofoundComponent } from './nofound/nofound.component';

const routes: Routes = [
  {path: 'home', component: SitehomeComponent},
  {path: 'about', component: AboutsiteComponent},
  {path: 'contact', component: ContactsiteComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NofoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
