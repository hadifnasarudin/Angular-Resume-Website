import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsProject } from './cms-project';

describe('CmsProject', () => {
  let component: CmsProject;
  let fixture: ComponentFixture<CmsProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmsProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
