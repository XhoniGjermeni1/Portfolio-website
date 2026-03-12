import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjekteService } from '../../../services/projekte';

// KORRIGJIM: Rruga e saktë nga src/app/pages/projekti-detaje/ te src/app/models/
import { Projekti } from '../../models/projekti.model';

@Component({
  selector: 'app-projekti-detaje',
  standalone: true,
  imports: [],
  templateUrl: './projekti-detaje.html',
  styleUrl: './projekti-detaje.css',
})
export class ProjektiDetajeComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private projekteService = inject(ProjekteService);
  private cdr = inject(ChangeDetectorRef);
  emriIProjektit: string | null = '';
  projektiZgjedhur: Projekti | undefined;

  ngOnInit(): void {
    this.emriIProjektit = this.route.snapshot.paramMap.get('id');

    if (this.emriIProjektit) {
      this.projekteService.getProjektiByTitulli(this.emriIProjektit).subscribe({
        // Tani 'projekt' vjen fiks si një objekt (Projekti) ose undefined
        next: (projekt) => {
          if (projekt) {
            // U gjet! Fute direkt te variabla
            this.projektiZgjedhur = projekt;
            this.cdr.detectChanges();
          } else {
            // Nuk u gjet (undefined)
            alert(`Kujdes: Projekti "${this.emriIProjektit}" nuk ekziston!`);
            this.router.navigate(['/projekte']);
          }
        },
        error: (err) => {
          console.error('Gabim gjatë ngarkimit të detajeve:', err);
          this.router.navigate(['/projekte']);
        },
      });
    }
  }
}
