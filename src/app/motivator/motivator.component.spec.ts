import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivatorComponent } from './motivator.component';

describe('MotivatorComponent', () => {
  let component: MotivatorComponent;
  let fixture: ComponentFixture<MotivatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
