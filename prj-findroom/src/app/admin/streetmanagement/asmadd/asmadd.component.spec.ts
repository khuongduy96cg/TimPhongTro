import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsmaddComponent } from './asmadd.component';

describe('AsmaddComponent', () => {
  let component: AsmaddComponent;
  let fixture: ComponentFixture<AsmaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsmaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsmaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
