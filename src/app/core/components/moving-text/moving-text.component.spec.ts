import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingTextComponent } from './moving-text.component';

describe('MovingTextComponent', () => {
  let component: MovingTextComponent;
  let fixture: ComponentFixture<MovingTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
