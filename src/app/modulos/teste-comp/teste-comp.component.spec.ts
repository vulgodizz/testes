import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteCompComponent } from './teste-comp.component';

describe('TesteCompComponent', () => {
  let component: TesteCompComponent;
  let fixture: ComponentFixture<TesteCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
