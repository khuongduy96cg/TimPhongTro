import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AumupdateComponent } from './aumupdate.component';

describe('AumupdateComponent', () => {
  let component: AumupdateComponent;
  let fixture: ComponentFixture<AumupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AumupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AumupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
