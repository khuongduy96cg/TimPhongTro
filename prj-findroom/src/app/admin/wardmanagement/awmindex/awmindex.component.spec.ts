import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwmindexComponent } from './awmindex.component';

describe('AwmindexComponent', () => {
  let component: AwmindexComponent;
  let fixture: ComponentFixture<AwmindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwmindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwmindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
