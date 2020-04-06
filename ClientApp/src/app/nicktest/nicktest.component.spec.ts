import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NicktestComponent } from './nicktest.component';

describe('NicktestComponent', () => {
  let component: NicktestComponent;
  let fixture: ComponentFixture<NicktestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NicktestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicktestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
