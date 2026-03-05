import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCardComponent {
  // 1. @Input: Pranon të dhënat e një projekti nga Prindi
  @Input() projekt: any;

  // 2. @Output: Një "zile" që njofton Prindin kur klikohet butoni
  // EventEmitter<string> thotë: "Kur të bie zilja, do dërgoj një tekst (linkun)"
  @Output() kopjoUShtyp = new EventEmitter<string>();

  onKopjoClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    // Shpërndajmë sinjalin lart te Prindi
    this.kopjoUShtyp.emit(this.projekt.linku);
  }
}
