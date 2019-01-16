import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureshomeComponent } from './featureshome.component';

describe('FeatureshomeComponent', () => {
  let component: FeatureshomeComponent;
  let fixture: ComponentFixture<FeatureshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
