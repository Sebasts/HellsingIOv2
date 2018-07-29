import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPathwayComponent } from './data-pathway.component';

describe('DataPathwayComponent', () => {
  let component: DataPathwayComponent;
  let fixture: ComponentFixture<DataPathwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPathwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPathwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
