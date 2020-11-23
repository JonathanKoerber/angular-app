import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctocatComponent } from './octocat.component';

describe('OctocatComponent', () => {
  let component: OctocatComponent;
  let fixture: ComponentFixture<OctocatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctocatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OctocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
