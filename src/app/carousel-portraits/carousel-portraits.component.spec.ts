import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPortraitsComponent } from './carousel-portraits.component';

describe('CarouselPortraitsComponent', () => {
  let component: CarouselPortraitsComponent;
  let fixture: ComponentFixture<CarouselPortraitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselPortraitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPortraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
