import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductioncardComponent } from './deductioncard.component';

describe('DeductioncardComponent', () => {
  let component: DeductioncardComponent;
  let fixture: ComponentFixture<DeductioncardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeductioncardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeductioncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
