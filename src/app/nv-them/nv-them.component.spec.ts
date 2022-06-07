import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvThemComponent } from './nv-them.component';

describe('NvThemComponent', () => {
  let component: NvThemComponent;
  let fixture: ComponentFixture<NvThemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvThemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
