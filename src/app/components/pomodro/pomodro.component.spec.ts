import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodroComponent } from './pomodro.component';

describe('PomodroComponent', () => {
  let component: PomodroComponent;
  let fixture: ComponentFixture<PomodroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PomodroComponent]
    });
    fixture = TestBed.createComponent(PomodroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
