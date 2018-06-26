import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmindexComponent } from './atmindex.component';

describe('AtmindexComponent', () => {
  let component: AtmindexComponent;
  let fixture: ComponentFixture<AtmindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
