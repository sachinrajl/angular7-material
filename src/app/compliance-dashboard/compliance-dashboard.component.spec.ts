import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceDashboardComponent } from './compliance-dashboard.component';

describe('ComplianceDashboardComponent', () => {
  let component: ComplianceDashboardComponent;
  let fixture: ComponentFixture<ComplianceDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplianceDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
