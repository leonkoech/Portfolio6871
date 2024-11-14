import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNavComponent } from './project-nav.component';

describe('ProjectNavComponent', () => {
  let component: ProjectNavComponent;
  let fixture: ComponentFixture<ProjectNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
