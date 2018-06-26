import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutmaddComponent } from './autmadd.component';

describe('AutmaddComponent', () => {
  let component: AutmaddComponent;
  let fixture: ComponentFixture<AutmaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutmaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutmaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
