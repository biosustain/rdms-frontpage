import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalGuidelinesComponent } from './national-guidelines.component';

describe('NationalGuidelinesComponent', () => {
  let component: NationalGuidelinesComponent;
  let fixture: ComponentFixture<NationalGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
