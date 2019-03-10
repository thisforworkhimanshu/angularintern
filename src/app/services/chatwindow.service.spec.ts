import { TestBed } from '@angular/core/testing';

import { ChatwindowService } from './chatwindow.service';

describe('ChatwindowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatwindowService = TestBed.get(ChatwindowService);
    expect(service).toBeTruthy();
  });
});
