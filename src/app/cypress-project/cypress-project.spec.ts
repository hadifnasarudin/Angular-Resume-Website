import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CypressProject } from './cypress-project';

describe('CypressProject', () => {
  let component: CypressProject;
  let fixture: ComponentFixture<CypressProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CypressProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CypressProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
