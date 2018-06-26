import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApmaddComponent } from './apmadd.component';

describe('ApmaddComponent', () => {
  let component: ApmaddComponent;
  let fixture: ComponentFixture<ApmaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApmaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApmaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
