import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmreplyComponent } from './ammreply.component';

describe('AmmreplyComponent', () => {
  let component: AmmreplyComponent;
  let fixture: ComponentFixture<AmmreplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmmreplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmreplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
