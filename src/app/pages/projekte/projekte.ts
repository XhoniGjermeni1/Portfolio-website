import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card';
import { ProjekteService } from '../../../services/projekte';

@Component({
  selector: 'app-projekte',
  standalone: true,
  imports: [FormsModule, ProjectCardComponent],
  templateUrl: './projekte.html',
  styleUrl: './projekte.css',
})
export class ProjekteComponent {
  kerkim: string = '';
  // me ane te inject marrim te dhenat e projekteve ne faqen ketu
  // Rreshti i pare eshte dependency injection. Me inject thua qe me duhet mjeti qe menaxhon projektet
  //Ne fillim pra krijojme nje lidhje me listen qe gjendet ne services
  // e pqstaj ;arri; te dhenat te rreshti i 2me metoden get
  private projekteService = inject(ProjekteService);
  projekte = this.projekteService.getProjekte();

  kopjo(link: string) {
    navigator.clipboard
      .writeText(link)
      // Keto kllapat jashte jane per tia vendosur arrow
      // functionin metodes then ose catch
      .then(() => {
        alert('Linku u kopjua me sukses' + link);
      })
      .catch((err) => {
        console.error('Gabim gjate kopjimit', err);
      });
  }
  // kur vendos get para funxionit i thua TS trajtoje si property
  // funksioni merr si argument te tere listen siper dhe me filter shikon cdo projekt 1 nga 1
  get projektetEFiltruara() {
    if (!this.kerkim.trim()) {
      return this.projekte;
    }
    return this.projekte.filter(
      (p) =>
        p.titulli.toLowerCase().includes(this.kerkim.toLowerCase()) ||
        p.pershkrimi.toLowerCase().includes(this.kerkim.toLowerCase()),
    );
  }
}
