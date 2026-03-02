import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kk } from './kk';

describe('Kk', () => {
  let component: Kk;
  let fixture: ComponentFixture<Kk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kk);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
