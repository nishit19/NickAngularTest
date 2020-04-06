import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NickcompComponent } from './nickcomp.component';

describe('NickcompComponent', () => {
  let component: NickcompComponent;
  let fixture: ComponentFixture<NickcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NickcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NickcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
