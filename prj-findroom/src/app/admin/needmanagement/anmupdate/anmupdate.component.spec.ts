import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnmupdateComponent } from './anmupdate.component';

describe('AnmupdateComponent', () => {
  let component: AnmupdateComponent;
  let fixture: ComponentFixture<AnmupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnmupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnmupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
