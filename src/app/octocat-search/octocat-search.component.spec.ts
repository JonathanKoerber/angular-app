import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctocatSearchComponent } from './octocat-search.component';

describe('OctocatSearchComponent', () => {
  let component: OctocatSearchComponent;
  let fixture: ComponentFixture<OctocatSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctocatSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OctocatSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
