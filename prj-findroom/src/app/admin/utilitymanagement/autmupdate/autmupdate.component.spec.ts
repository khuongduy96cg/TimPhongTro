import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutmupdateComponent } from './autmupdate.component';

describe('AutmupdateComponent', () => {
  let component: AutmupdateComponent;
  let fixture: ComponentFixture<AutmupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutmupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutmupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
