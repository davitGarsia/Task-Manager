import { TestBed } from '@angular/core/testing';

import { CheckMailService } from './check-mail.service';

describe('CheckMailService', () => {
  let service: CheckMailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckMailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
