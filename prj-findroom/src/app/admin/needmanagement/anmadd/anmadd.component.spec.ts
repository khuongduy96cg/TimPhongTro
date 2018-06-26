import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnmaddComponent } from './anmadd.component';

describe('AnmaddComponent', () => {
  let component: AnmaddComponent;
  let fixture: ComponentFixture<AnmaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnmaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnmaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
