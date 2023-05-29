import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaybindingComponent } from './twowaybinding.component';

describe('TwowaybindingComponent', () => {
  let component: TwowaybindingComponent;
  let fixture: ComponentFixture<TwowaybindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowaybindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
