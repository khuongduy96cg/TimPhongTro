import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmindexComponent } from './armindex.component';

describe('ArmindexComponent', () => {
  let component: ArmindexComponent;
  let fixture: ComponentFixture<ArmindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
