import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApmupdateComponent } from './apmupdate.component';

describe('ApmupdateComponent', () => {
  let component: ApmupdateComponent;
  let fixture: ComponentFixture<ApmupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApmupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApmupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
