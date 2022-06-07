import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuanChitietComponent } from './duan-chitiet.component';

describe('DuanChitietComponent', () => {
  let component: DuanChitietComponent;
  let fixture: ComponentFixture<DuanChitietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuanChitietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuanChitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
