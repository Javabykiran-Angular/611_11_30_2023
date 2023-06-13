import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduseComponent } from './adduse.component';

describe('AdduseComponent', () => {
  let component: AdduseComponent;
  let fixture: ComponentFixture<AdduseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
