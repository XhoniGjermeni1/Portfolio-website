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
      ngjyra: '#c62828',
    },
    {
      emri: 'Java & Spring Boot',
      ngjyra: '#2e7d32',
    },
    {
      emri: 'Git',
      ngjyra: '#f4511e',
    },
  ];
}
