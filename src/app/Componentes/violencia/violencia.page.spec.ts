import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolenciaPage } from './violencia.page';

describe('ViolenciaPage', () => {
  let component: ViolenciaPage;
  let fixture: ComponentFixture<ViolenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViolenciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
