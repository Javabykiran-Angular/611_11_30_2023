import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fordirective2Component } from './fordirective2.component';

describe('Fordirective2Component', () => {
  let component: Fordirective2Component;
  let fixture: ComponentFixture<Fordirective2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fordirective2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fordirective2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
