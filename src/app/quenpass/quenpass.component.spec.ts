import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuenpassComponent } from './quenpass.component';

describe('QuenpassComponent', () => {
  let component: QuenpassComponent;
  let fixture: ComponentFixture<QuenpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuenpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuenpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
