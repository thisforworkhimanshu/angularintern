import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcometextComponent } from './welcometext.component';

describe('WelcometextComponent', () => {
  let component: WelcometextComponent;
  let fixture: ComponentFixture<WelcometextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcometextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcometextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
