import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSpotlightComponent } from './blog-spotlight.component';

describe('BlogSpotlightComponent', () => {
  let component: BlogSpotlightComponent;
  let fixture: ComponentFixture<BlogSpotlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSpotlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSpotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
