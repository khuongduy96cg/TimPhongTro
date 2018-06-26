import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiindexComponent } from './aiindex.component';

describe('AiindexComponent', () => {
  let component: AiindexComponent;
  let fixture: ComponentFixture<AiindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
