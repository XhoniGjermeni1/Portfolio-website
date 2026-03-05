import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProjekteComponent } from './projekte/projekte';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projekte', component: ProjekteComponent },
  { path: '**', redirectTo: '' }, //cdo gje ae nuk eshte lart e kap kjo dhe e ben redirect
];
