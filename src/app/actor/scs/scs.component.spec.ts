import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCSComponent } from './scs.component';

describe('SCSComponent', () => {
  let component: SCSComponent;
  let fixture: ComponentFixture<SCSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SCSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SCSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
