import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HR } from './hr';

describe('HR', () => {
  let component: HR;
  let fixture: ComponentFixture<HR>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HR],
    }).compileComponents();

    fixture = TestBed.createComponent(HR);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
