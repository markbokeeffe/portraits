import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPortraitsComponent } from './dialog-portraits.component';

describe('DialogPortraitsComponent', () => {
  let component: DialogPortraitsComponent;
  let fixture: ComponentFixture<DialogPortraitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPortraitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPortraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
