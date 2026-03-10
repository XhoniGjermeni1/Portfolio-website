import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode = signal<boolean>(false);

  toogleTheme() {
    this.isDarkMode.update((vleraEVjeter) => !vleraEVjeter);
  }
}
