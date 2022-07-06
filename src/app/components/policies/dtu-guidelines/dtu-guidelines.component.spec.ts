import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtuGuidelinesComponent } from './dtu-guidelines.component';

describe('DtuGuidelinesComponent', () => {
  let component: DtuGuidelinesComponent;
  let fixture: ComponentFixture<DtuGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtuGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtuGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
