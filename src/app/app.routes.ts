import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { adminGuard } from './core/guards/admin-guard';
// I komentojme keto sepse do bejme Lazy loading
// import { ProjekteComponent } from './pages/projekte/projekte';
// import { ProjektiDetajeComponent } from './pages/projekti-detaje/projekti-detaje';
// import { AboutComponent } from './pages/about/about';
// import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin').then((m) => m.AdminComponent),
    canActivate: [adminGuard],
  },
  {
    path: 'projekte',
    loadComponent: () => import('./pages/projekte/projekte').then((m) => m.ProjekteComponent),
  },
  // Ai : eshte thjesht per te mbledhur cadolloj shkronje
  //apo numri pas vizes projekte/dhe hap faqen e re te
  // ndertuar fillimisht
  {
    path: 'projekte/:id',
    loadComponent: () =>
      import('./pages/projekti-detaje/projekti-detaje').then((m) => m.ProjektiDetajeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.ContactComponent),
  },
  { path: '**', redirectTo: '' }, //cdo gje qe nuk eshte lart e kap kjo dhe e ben redirect
];
