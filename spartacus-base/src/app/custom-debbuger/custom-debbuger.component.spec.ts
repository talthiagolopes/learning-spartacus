import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDebbugerComponent } from './custom-debbuger.component';

describe('CustomDebbugerComponent', () => {
  let component: CustomDebbugerComponent;
  let fixture: ComponentFixture<CustomDebbugerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDebbugerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDebbugerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
