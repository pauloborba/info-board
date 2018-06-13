import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepElectionComponent } from './rep-election.component';

describe('RepElectionComponent', () => {
  let component: RepElectionComponent;
  let fixture: ComponentFixture<RepElectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepElectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
