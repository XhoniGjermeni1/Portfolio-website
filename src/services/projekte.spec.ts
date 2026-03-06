import { TestBed } from '@angular/core/testing';

import { ProjekteService } from './projekte';

describe('Projekte', () => {
  let service: ProjekteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjekteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
