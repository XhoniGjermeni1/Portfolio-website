import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. Importojmë Service-in nga dosja e tij
// import { ProjekteService } from '../../../services/projekte';

// 2. Importojmë Modelin drejtpërdrejt nga dosja models
import { Projekti } from '../../../models/projekti.model';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCardComponent {
  // 1. @Input: Pranon të dhënat e një projekti nga Prindi
  @Input({ required: true }) projekt!: Projekti;

  // 2. @Output: Një "zile" që njofton Prindin kur klikohet butoni
  // EventEmitter<string> thotë: "Kur të bie zilja, do dërgoj një tekst (linkun)"
  @Output() kopjoUShtyp = new EventEmitter<string>();

  onKopjoClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    // Shpërndajmë sinjalin lart te Prindi
    this.kopjoUShtyp.emit(this.projekt.linku);
  }
  getSlug(): string {
    if (this.projekt && this.projekt.titulli) {
      return this.projekt.titulli.toLowerCase().replace(/\s+/g, '-');
    }
    return ''; // Kthejmë një vlerë default nëse nuk ka të dhëna
  }
}
