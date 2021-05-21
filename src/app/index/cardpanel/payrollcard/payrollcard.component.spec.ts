import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollcardComponent } from './payrollcard.component';

describe('PayrollcardComponent', () => {
  let component: PayrollcardComponent;
  let fixture: ComponentFixture<PayrollcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
