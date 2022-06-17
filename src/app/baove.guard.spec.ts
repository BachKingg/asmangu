import { TestBed } from '@angular/core/testing';

import { BaoveGuard } from './baove.guard';

describe('BaoveGuard', () => {
  let guard: BaoveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BaoveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
