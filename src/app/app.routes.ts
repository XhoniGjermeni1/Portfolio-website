import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProjekteComponent } from './pages/projekte/projekte';
import { ProjektiDetajeComponent } from './pages/projekti-detaje/projekti-detaje';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projekte', component: ProjekteComponent },
  // Ai : eshte thjesht per te mbledhur cadolloj shkronje
  //apo numri pas vizes projekte/dhe hap faqen e re te
  // ndertuar fillimisht
  { path: 'projekte/:id', component: ProjektiDetajeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }, //cdo gje qe nuk eshte lart e kap kjo dhe e ben redirect
];
