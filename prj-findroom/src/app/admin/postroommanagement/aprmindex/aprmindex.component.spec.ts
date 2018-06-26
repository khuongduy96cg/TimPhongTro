import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprmindexComponent } from './aprmindex.component';

describe('AprmindexComponent', () => {
  let component: AprmindexComponent;
  let fixture: ComponentFixture<AprmindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprmindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprmindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
