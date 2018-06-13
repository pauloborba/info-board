import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepHistoryComponent } from './rep-history.component';

describe('RepHistoryComponent', () => {
  let component: RepHistoryComponent;
  let fixture: ComponentFixture<RepHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
