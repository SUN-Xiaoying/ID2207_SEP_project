import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FMComponent } from './fm.component';

describe('FMComponent', () => {
  let component: FMComponent;
  let fixture: ComponentFixture<FMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
