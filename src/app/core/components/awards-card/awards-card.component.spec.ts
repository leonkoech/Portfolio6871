import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsCardComponent } from './awards-card.component';

describe('AwardsCardComponent', () => {
  let component: AwardsCardComponent;
  let fixture: ComponentFixture<AwardsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwardsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
