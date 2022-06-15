import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalDatabasesComponent } from './internal-databases.component';

describe('InternalDatabasesComponent', () => {
  let component: InternalDatabasesComponent;
  let fixture: ComponentFixture<InternalDatabasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalDatabasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalDatabasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
