import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiberPage } from './ciber.page';

describe('CiberPage', () => {
  let component: CiberPage;
  let fixture: ComponentFixture<CiberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
