import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctocatDetailComponent } from './octocat-detail.component';

describe('OctocatDetailComponent', () => {
  let component: OctocatDetailComponent;
  let fixture: ComponentFixture<OctocatDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctocatDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OctocatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
