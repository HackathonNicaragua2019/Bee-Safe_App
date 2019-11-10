import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapeadoPage } from './mapeado.page';

describe('MapeadoPage', () => {
  let component: MapeadoPage;
  let fixture: ComponentFixture<MapeadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapeadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapeadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
