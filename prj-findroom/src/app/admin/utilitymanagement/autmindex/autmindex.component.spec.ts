import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutmindexComponent } from './autmindex.component';

describe('AutmindexComponent', () => {
  let component: AutmindexComponent;
  let fixture: ComponentFixture<AutmindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutmindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutmindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
