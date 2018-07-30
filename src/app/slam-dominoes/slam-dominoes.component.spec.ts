import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlamDominoesComponent } from './slam-dominoes.component';

describe('SlamDominoesComponent', () => {
  let component: SlamDominoesComponent;
  let fixture: ComponentFixture<SlamDominoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlamDominoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlamDominoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
