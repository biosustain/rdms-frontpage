import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareCatalogComponent } from './software-catalog.component';

describe('SoftwareCatalogComponent', () => {
  let component: SoftwareCatalogComponent;
  let fixture: ComponentFixture<SoftwareCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
