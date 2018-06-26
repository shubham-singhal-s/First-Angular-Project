import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainchildComponent } from './mainchild.component';

describe('MainchildComponent', () => {
  let component: MainchildComponent;
  let fixture: ComponentFixture<MainchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
