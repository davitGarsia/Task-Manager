import { TestBed } from '@angular/core/testing';

import { IssueTypesFacadeService } from './issue-types-facade.service';

describe('IssueTypesFacadeService', () => {
  let service: IssueTypesFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueTypesFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
