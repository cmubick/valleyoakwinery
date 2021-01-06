import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinesDetailComponent } from './wines-detail.component';

describe('WinesDetailComponent', () => {
  let component: WinesDetailComponent;
  let fixture: ComponentFixture<WinesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
