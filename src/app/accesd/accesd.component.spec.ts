import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesdComponent } from './accesd.component';

describe('AccesdComponent', () => {
  let component: AccesdComponent;
  let fixture: ComponentFixture<AccesdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
