import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainptwoComponent } from './mainptwo.component';

describe('MainptwoComponent', () => {
  let component: MainptwoComponent;
  let fixture: ComponentFixture<MainptwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainptwoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainptwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
