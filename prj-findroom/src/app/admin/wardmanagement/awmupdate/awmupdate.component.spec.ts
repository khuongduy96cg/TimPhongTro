import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwmupdateComponent } from './awmupdate.component';

describe('AwmupdateComponent', () => {
  let component: AwmupdateComponent;
  let fixture: ComponentFixture<AwmupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwmupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwmupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
