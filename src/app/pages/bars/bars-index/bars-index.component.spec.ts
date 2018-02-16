import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsIndexComponent } from './bars-index.component';

describe('BarsIndexComponent', () => {
  let component: BarsIndexComponent;
  let fixture: ComponentFixture<BarsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
