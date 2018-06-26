import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AumindexComponent } from './aumindex.component';

describe('AumindexComponent', () => {
  let component: AumindexComponent;
  let fixture: ComponentFixture<AumindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AumindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AumindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
