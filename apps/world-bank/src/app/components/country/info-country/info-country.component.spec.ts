import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCountryComponent } from './info-country.component';

describe('InfoCountryComponent', () => {
  let component: InfoCountryComponent;
  let fixture: ComponentFixture<InfoCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
