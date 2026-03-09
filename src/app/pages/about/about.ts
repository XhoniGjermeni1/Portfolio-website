import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  emri = 'Xhoni Gjermeni';
  titulli = 'Software Developer';
  teknologjite = [
    {
      emri: 'Angular',
      ngjyra: '#ff6b6b',
    },
    {
      emri: 'Java & Spring Boot',
      ngjyra: '#6ee7b7',
    },
    {
      emri: 'Git',
      ngjyra: '#fdba74',
    },
  ];
}
