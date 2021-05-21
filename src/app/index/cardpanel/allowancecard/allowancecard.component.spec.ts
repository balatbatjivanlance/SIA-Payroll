import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowancecardComponent } from './allowancecard.component';

describe('AllowancecardComponent', () => {
  let component: AllowancecardComponent;
  let fixture: ComponentFixture<AllowancecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllowancecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowancecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
