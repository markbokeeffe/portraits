import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPresentationsComponent } from './dialog-presentations.component';

describe('DialogPresentationsComponent', () => {
  let component: DialogPresentationsComponent;
  let fixture: ComponentFixture<DialogPresentationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPresentationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPresentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
