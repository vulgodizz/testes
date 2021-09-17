import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteCompSeoComponent } from './teste-comp-seo.component';

describe('TesteCompSeoComponent', () => {
  let component: TesteCompSeoComponent;
  let fixture: ComponentFixture<TesteCompSeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteCompSeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteCompSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
