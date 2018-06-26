import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindexComponent } from './admindex.component';

describe('AdmindexComponent', () => {
  let component: AdmindexComponent;
  let fixture: ComponentFixture<AdmindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
