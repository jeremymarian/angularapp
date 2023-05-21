import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PviewComponent } from './pview.component';

describe('PviewComponent', () => {
  let component: PviewComponent;
  let fixture: ComponentFixture<PviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
