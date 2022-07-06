import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfbGuidelinesComponent } from './cfb-guidelines.component';

describe('CfbGuidelinesComponent', () => {
  let component: CfbGuidelinesComponent;
  let fixture: ComponentFixture<CfbGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfbGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfbGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
