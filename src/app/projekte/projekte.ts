import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectCardComponent } from '../components/project-card/project-card';

@Component({
  selector: 'app-projekte',
  standalone: true,
  imports: [FormsModule, ProjectCardComponent],
  templateUrl: './projekte.html',
  styleUrl: './projekte.css',
})
export class ProjekteComponent {
  kerkim: string = '';
  projekte = [
    {
      imazhi: 'assets/images/hikim.png',
      titulli: 'Hikim',
      pershkrimi: 'Laravel',
      linku: 'https://github.com/sildi-sh/amazon-project',
    },
    {
      imazhi: 'assets/images/hikim.png',
      titulli: 'Algoritmet',
      pershkrimi: 'Vizualizimi i Merge Sort',
      linku: 'https://github.com/sildi-sh/amazon-project',
    },
    {
      imazhi: 'assets/images/hikim.png',
      titulli: 'Projekti tjetër',
      pershkrimi: 'Përshkrim i shkurtër këtu',
      linku: 'https://github.com/sildi-sh/amazon-project',
    },
  ];

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
