import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcardComponent } from './vcard.component';

describe('VcardComponent', () => {
  let component: VcardComponent;
  let fixture: ComponentFixture<VcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VcardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(VcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTrue();
  });
});
