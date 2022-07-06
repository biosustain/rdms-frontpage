import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalGuidelinesComponent } from './international-guidelines.component';

describe('InternationalGuidelinesComponent', () => {
  let component: InternationalGuidelinesComponent;
  let fixture: ComponentFixture<InternationalGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
