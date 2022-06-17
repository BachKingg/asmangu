import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangnhapComponent } from './dangnhap.component';

describe('DangnhapComponent', () => {
  let component: DangnhapComponent;
  let fixture: ComponentFixture<DangnhapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangnhapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangnhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
