import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs'; // SHTUAM: map këtu
import { Projekti } from '../app/models/projekti.model';

@Injectable({
  providedIn: 'root',
})
export class ProjekteService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/projekte';

  // 1. Merr të gjitha projektet
  getProjekte(): Observable<Projekti[]> {
    return this.http.get<Projekti[]>(this.apiUrl);
  }

  // 2. Metoda që rregullon Error-in te faqja e detajeve
  getProjektiByTitulli(titulli: string): Observable<Projekti | undefined> {
    return this.http
      .get<Projekti[]>(this.apiUrl)
      .pipe(
        map((projekte) =>
          projekte.find(
            (p) => p.titulli.toLowerCase().replace(/\s+/g, '-') === titulli.toLowerCase(),
          ),
        ),
      );
  }

  // 3. Metoda për fshirje (që do na duhet tani)
  fshiProjekt(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
} // Këtu mbaron klasa! Çdo gjë tjetër poshtë është e komentuar

// export class ProjekteService {
//   private projekteList: Projekti[] = [
//     {
//       imazhi: 'assets/images/hikim.png',
//       titulli: 'Hikim',
//       pershkrimi: 'Laravel',
//       linku: 'https://github.com/sildi-sh/amazon-project',
//     },
//     {
//       imazhi: 'assets/images/hikim.png',
//       titulli: 'Algoritmet',
//       pershkrimi: 'Vizualizimi i Merge Sort',
//       linku: 'https://github.com/sildi-sh/amazon-project',
//     },
//     {
//       imazhi: 'assets/images/hikim.png',
//       titulli: 'Projekti tjetër',
//       pershkrimi: 'Përshkrim i shkurtër këtu',
//       linku: 'https://github.com/sildi-sh/amazon-project',
//     },
//   ];

//   constructor() {}

//   // vetem nepermjet kesaj metode aksesohet lista e projekteve
//   getProjekte(): Projekti[] {
//     return this.projekteList;
//   }

//   getProjektiByTitulli(titulli: string): Projekti | undefined {
//     const titulliIModifikuar = titulli.replace(/-/g, ' ');
//     return this.projekteList.find(
//       (projekt) => projekt.titulli.toLowerCase() === titulliIModifikuar.toLowerCase(),
//     );
//   }
// }
