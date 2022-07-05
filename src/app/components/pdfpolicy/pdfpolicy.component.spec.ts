import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfpolicyComponent } from './pdfpolicy.component';

describe('PdfpolicyComponent', () => {
  let component: PdfpolicyComponent;
  let fixture: ComponentFixture<PdfpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfpolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
