import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApmindexComponent } from './apmindex.component';

describe('ApmindexComponent', () => {
  let component: ApmindexComponent;
  let fixture: ComponentFixture<ApmindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApmindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApmindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
