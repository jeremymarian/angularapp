import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainponeComponent } from './mainpone.component';

describe('MainponeComponent', () => {
  let component: MainponeComponent;
  let fixture: ComponentFixture<MainponeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainponeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
