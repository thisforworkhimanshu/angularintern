import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationInfoDialogComponent } from './conversation-info-dialog.component';

describe('ConversationInfoDialogComponent', () => {
  let component: ConversationInfoDialogComponent;
  let fixture: ComponentFixture<ConversationInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
