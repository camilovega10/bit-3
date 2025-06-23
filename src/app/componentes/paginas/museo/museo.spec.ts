import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Museo } from './museo';

describe('Museo', () => {
  let component: Museo;
  let fixture: ComponentFixture<Museo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Museo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Museo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
