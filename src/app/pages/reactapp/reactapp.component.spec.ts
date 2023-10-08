import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactappComponent } from './reactapp.component';

describe('ReactappComponent', () => {
  let component: ReactappComponent;
  let fixture: ComponentFixture<ReactappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactappComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
