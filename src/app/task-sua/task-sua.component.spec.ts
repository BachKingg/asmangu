import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSuaComponent } from './task-sua.component';

describe('TaskSuaComponent', () => {
  let component: TaskSuaComponent;
  let fixture: ComponentFixture<TaskSuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskSuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
