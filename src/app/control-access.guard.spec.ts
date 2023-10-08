import { TestBed } from '@angular/core/testing';

import { ControlAccess } from './control-access.guard';

describe('ControlAccessGuard', () => {
  let guard: ControlAccess;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ControlAccess);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
