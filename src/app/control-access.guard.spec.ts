import { TestBed } from '@angular/core/testing';

import { ControlAccessGuard } from './control-access.guard';

describe('ControlAccessGuard', () => {
  let guard: ControlAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ControlAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
