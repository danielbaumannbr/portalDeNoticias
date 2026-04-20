import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Somos } from './somos';

describe('Somos', () => {
  let component: Somos;
  let fixture: ComponentFixture<Somos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Somos],
    }).compileComponents();

    fixture = TestBed.createComponent(Somos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
