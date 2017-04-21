import { TestBed, inject } from '@angular/core/testing';

import { WebSocketServiceService } from './web-socket-service.service';

describe('WebSocketServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebSocketServiceService]
    });
  });

  it('should ...', inject([WebSocketServiceService], (service: WebSocketServiceService) => {
    expect(service).toBeTruthy();
  }));
});