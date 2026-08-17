import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRManager } from './hrmanager';

describe('HRManager', () => {
  let component: HRManager;
  let fixture: ComponentFixture<HRManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HRManager],
    }).compileComponents();

    fixture = TestBed.createComponent(HRManager);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
