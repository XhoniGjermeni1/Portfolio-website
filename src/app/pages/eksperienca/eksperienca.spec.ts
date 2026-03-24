import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eksperienca } from './eksperienca';

describe('Eksperienca', () => {
  let component: Eksperienca;
  let fixture: ComponentFixture<Eksperienca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eksperienca],
    }).compileComponents();

    fixture = TestBed.createComponent(Eksperienca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
