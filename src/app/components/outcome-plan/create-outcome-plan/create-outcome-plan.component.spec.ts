import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOutcomePlanComponent } from './create-outcome-plan.component';

describe('CreateOutcomePlanComponent', () => {
  let component: CreateOutcomePlanComponent;
  let fixture: ComponentFixture<CreateOutcomePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOutcomePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOutcomePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
