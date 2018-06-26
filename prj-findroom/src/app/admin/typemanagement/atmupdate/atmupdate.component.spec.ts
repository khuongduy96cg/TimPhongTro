import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmupdateComponent } from './atmupdate.component';

describe('AtmupdateComponent', () => {
  let component: AtmupdateComponent;
  let fixture: ComponentFixture<AtmupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
