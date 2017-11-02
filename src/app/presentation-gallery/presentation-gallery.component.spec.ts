import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationGalleryComponent } from './presentation-gallery.component';

describe('PresentationGalleryComponent', () => {
  let component: PresentationGalleryComponent;
  let fixture: ComponentFixture<PresentationGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
