import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectiveIssueDescriptionComponent } from './selective-issue-description.component';

describe('SelectiveIssueDescriptionComponent', () => {
  let component: SelectiveIssueDescriptionComponent;
  let fixture: ComponentFixture<SelectiveIssueDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectiveIssueDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectiveIssueDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
