import { TestBed } from '@angular/core/testing';

import { ToggleSignupService } from './toggle-signup.service';

describe('ToggleSignupService', () => {
  let service: ToggleSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
