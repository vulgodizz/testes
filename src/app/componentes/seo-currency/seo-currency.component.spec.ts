import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoCurrencyComponent } from './seo-currency.component';

describe('SeoCurrencyComponent', () => {
  let component: SeoCurrencyComponent;
  let fixture: ComponentFixture<SeoCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeoCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
