import { TestBed } from '@angular/core/testing';

import { UsersFacadeService } from './users-facade.service';

describe('UserdFacadeService', () => {
  let service: UsersFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
