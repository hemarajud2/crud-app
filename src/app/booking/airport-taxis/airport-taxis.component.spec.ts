import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportTaxisComponent } from './airport-taxis.component';

describe('AirportTaxisComponent', () => {
  let component: AirportTaxisComponent;
  let fixture: ComponentFixture<AirportTaxisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportTaxisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportTaxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
