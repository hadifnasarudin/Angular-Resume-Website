import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { FaraidProject } from './faraid-project';

describe('FaraidProject', () => {
  let component: FaraidProject;
  let fixture: ComponentFixture<FaraidProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaraidProject],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FaraidProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
