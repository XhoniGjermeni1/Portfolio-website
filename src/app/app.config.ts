import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Ky lidhet me rrugët e tua

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
