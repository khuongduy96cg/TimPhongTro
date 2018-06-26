import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsmindexComponent } from './asmindex.component';

describe('AsmindexComponent', () => {
  let component: AsmindexComponent;
  let fixture: ComponentFixture<AsmindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsmindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsmindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
