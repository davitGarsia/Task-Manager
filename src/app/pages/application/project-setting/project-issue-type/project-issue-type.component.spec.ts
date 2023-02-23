import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIssueTypeComponent } from './project-issue-type.component';

describe('ProjectIssueTypeComponent', () => {
  let component: ProjectIssueTypeComponent;
  let fixture: ComponentFixture<ProjectIssueTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectIssueTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectIssueTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
