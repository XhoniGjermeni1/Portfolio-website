import { Component, inject, OnInit } from '@angular/core';
// 1. Importojmë veglën e URL-së
import { ActivatedRoute, Router } from '@angular/router';
import { ProjekteService, Projekti } from '../../../services/projekte';
@Component({
  selector: 'app-projekti-detaje',
  standalone: true,
  imports: [],
  templateUrl: './projekti-detaje.html',
  styleUrl: './projekti-detaje.css',
})
export class ProjektiDetajeComponent implements OnInit {
  // Ruajme rrugen qe mban angulari vet pra ku ndohet perdoruesi kete sekonde
  // kete e ruajme ne nje variabel route
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private projekteService = inject(ProjekteService);

  emriIProjektit: string | null = '';
  projektiZgjedhur: Projekti | undefined;
  ngOnInit(): void {
    // fillon te route qe sapo klrijuam
    // .snapshot merr gjendjen fikse te url ne moment
    // .paramMap jep te dhenat e vlefshme per cdo karakter te shkruar tek id
    // .get(id) me jep vetem vleren qe kemi quajtur id te routes
    this.emriIProjektit = this.route.snapshot.paramMap.get('id');
    if (this.emriIProjektit) {
      this.projektiZgjedhur = this.projekteService.getProjektiByTitulli(this.emriIProjektit);
    }

    if (!this.projektiZgjedhur) {
      alert(`Kujdes: Projekti "${this.emriIProjektit}" nuk ekziston!`);
      this.router.navigate(['/projekte']);
    }
  }
}
