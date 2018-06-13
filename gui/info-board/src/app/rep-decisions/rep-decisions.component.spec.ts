import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepDecisionsComponent } from './rep-decisions.component';

describe('RepDecisionsComponent', () => {
  let component: RepDecisionsComponent;
  let fixture: ComponentFixture<RepDecisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepDecisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepDecisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
