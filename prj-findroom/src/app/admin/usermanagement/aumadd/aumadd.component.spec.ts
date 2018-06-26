import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AumaddComponent } from './aumadd.component';

describe('AumaddComponent', () => {
  let component: AumaddComponent;
  let fixture: ComponentFixture<AumaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AumaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AumaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
