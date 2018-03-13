import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsTableComponent } from './bars-table.component';

describe('BarsTableComponent', () => {
  let component: BarsTableComponent;
  let fixture: ComponentFixture<BarsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
