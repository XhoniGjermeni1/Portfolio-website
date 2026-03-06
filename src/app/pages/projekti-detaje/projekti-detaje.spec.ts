import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektiDetajeComponent } from './projekti-detaje';

describe('ProjektiDetaje', () => {
  let component: ProjektiDetajeComponent;
  let fixture: ComponentFixture<ProjektiDetajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjektiDetajeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjektiDetajeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
