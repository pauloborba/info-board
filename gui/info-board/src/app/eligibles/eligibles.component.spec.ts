import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligiblesComponent } from './eligibles.component';

describe('EligiblesComponent', () => {
  let component: EligiblesComponent;
  let fixture: ComponentFixture<EligiblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligiblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
