import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoipassComponent } from './doipass.component';

describe('DoipassComponent', () => {
  let component: DoipassComponent;
  let fixture: ComponentFixture<DoipassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoipassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoipassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
