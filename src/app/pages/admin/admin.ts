import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  styleUrl: './admin.css',
  template: `
    <div
      style="padding: 50px; text-align: center; background-color: #ffebee; border-radius: 10px; margin: 20px;"
    >
      <h1 style="color: #c62828;">🕵️‍♂️ Paneli Sekret i Adminit</h1>
      <p>
        Meqenëse po e shikon këtë ekran, Guard-i (Roja) e kontrolloi 'localStorage' dhe e hapi
        derën!
      </p>

      <button
        (click)="dilNgaSistemi()"
        style="padding: 10px 20px; background: #c62828; color: white; border: none; cursor: pointer; border-radius: 5px;"
      >
        Dil nga Sistemi (Fshi Çelësin)
      </button>
    </div>
  `,
})
export class AdminComponent {
  private router = inject(Router);

  dilNgaSistemi() {
    localStorage.removeItem('roli_im');
    this.router.navigate(['/']);
  }
}
