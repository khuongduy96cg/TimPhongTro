import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmindexComponent } from './ammindex.component';

describe('AmmindexComponent', () => {
  let component: AmmindexComponent;
  let fixture: ComponentFixture<AmmindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmmindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
