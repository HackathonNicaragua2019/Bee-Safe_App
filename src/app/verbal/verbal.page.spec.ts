import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbalPage } from './verbal.page';

describe('VerbalPage', () => {
  let component: VerbalPage;
  let fixture: ComponentFixture<VerbalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
