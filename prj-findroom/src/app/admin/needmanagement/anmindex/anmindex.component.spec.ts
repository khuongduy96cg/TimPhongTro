import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnmindexComponent } from './anmindex.component';

describe('AnmindexComponent', () => {
  let component: AnmindexComponent;
  let fixture: ComponentFixture<AnmindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnmindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnmindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
