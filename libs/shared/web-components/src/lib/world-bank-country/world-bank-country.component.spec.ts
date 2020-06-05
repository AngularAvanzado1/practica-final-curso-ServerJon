import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldBankCountryComponent } from './world-bank-country.component';

describe('WorldBankCountryComponent', () => {
  let component: WorldBankCountryComponent;
  let fixture: ComponentFixture<WorldBankCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldBankCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldBankCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
