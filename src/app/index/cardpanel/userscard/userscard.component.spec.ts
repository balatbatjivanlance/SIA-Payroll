import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserscardComponent } from './userscard.component';

describe('UserscardComponent', () => {
  let component: UserscardComponent;
  let fixture: ComponentFixture<UserscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserscardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
