import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmupdateComponent } from './admupdate.component';

describe('AdmupdateComponent', () => {
  let component: AdmupdateComponent;
  let fixture: ComponentFixture<AdmupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
