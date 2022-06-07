import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskThemComponent } from './task-them.component';

describe('TaskThemComponent', () => {
  let component: TaskThemComponent;
  let fixture: ComponentFixture<TaskThemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskThemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
