import { Injectable } from '@angular/core';

// ky eshte modeli i projektit
// eshte privat pasi nuk duhet te modifikohet nga jashte
export interface Projekti {
  titulli: string;
  pershkrimi: string;
  imazhi: string;
  linku: string;
}
// dekoratori injectable i thot angularit qe ky sherbim eshte nje singleton
// nese behet 1 ndryshim ketu behet ne tere filet qe permbajne projekte cards
@Injectable({
  providedIn: 'root', //kjo dmth qe eshte i aksesueshem ne tere projektin
})
export class ProjekteService {
  private projekteList: Projekti[] = [
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

  constructor() {}

  // vetem nepermjet kesaj metode aksesohet lista e projekteve
  getProjekte(): Projekti[] {
    return this.projekteList;
  }

  getProjektiByTitulli(titulli: string): Projekti | undefined {
    const titulliIModifikuar = titulli.replace(/-/g, ' ');
    return this.projekteList.find(
      (projekt) => projekt.titulli.toLowerCase() === titulliIModifikuar.toLowerCase(),
    );
  }
}
