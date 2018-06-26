import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiexComponent } from './apiex.component';

describe('ApiexComponent', () => {
  let component: ApiexComponent;
  let fixture: ComponentFixture<ApiexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
