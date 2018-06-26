import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwmaddComponent } from './awmadd.component';

describe('AwmaddComponent', () => {
  let component: AwmaddComponent;
  let fixture: ComponentFixture<AwmaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwmaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwmaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
