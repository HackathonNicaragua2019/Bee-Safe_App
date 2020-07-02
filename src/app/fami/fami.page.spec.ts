import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiPage } from './fami.page';

describe('FamiPage', () => {
  let component: FamiPage;
  let fixture: ComponentFixture<FamiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
