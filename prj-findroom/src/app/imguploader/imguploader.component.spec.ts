import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImguploaderComponent } from './imguploader.component';

describe('ImguploaderComponent', () => {
  let component: ImguploaderComponent;
  let fixture: ComponentFixture<ImguploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImguploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImguploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
