import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PviewComponent } from './pview.component';

describe('PviewComponent', () => {
  let component: PviewComponent;
  let fixture: ComponentFixture<PviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PviewComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
