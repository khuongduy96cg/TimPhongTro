import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmaddComponent } from './atmadd.component';

describe('AtmaddComponent', () => {
  let component: AtmaddComponent;
  let fixture: ComponentFixture<AtmaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
