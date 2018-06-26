import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsmupdateComponent } from './asmupdate.component';

describe('AsmupdateComponent', () => {
  let component: AsmupdateComponent;
  let fixture: ComponentFixture<AsmupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsmupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsmupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
