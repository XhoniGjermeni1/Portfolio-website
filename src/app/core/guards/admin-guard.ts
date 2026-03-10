import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  // injektojme routerin. Nese dikush nuk ka leje
  // do e ridrejtojme te home
  const router = inject(Router);

  const roliIPerdouresit = localStorage.getItem('roli_im');
  if (roliIPerdouresit === 'super-admin') {
    return true;
  } else {
    alert('Nuk keni akses ne kete faqe');
    router.navigate(['/']);
    return false;
  }
};
