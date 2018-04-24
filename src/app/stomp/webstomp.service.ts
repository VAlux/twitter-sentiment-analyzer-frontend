import { Injectable } from '@angular/core';
import { StompService } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
//import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WebstompService {

  private queueName = 'sentiment-analyzed-tweets-realtime';

  private queueConfig = {
    'durable': true,
    'auto-delete': false
  };

  constructor(private stompService: StompService) { }

  observeMessages(): Observable<Message> {
    return this.stompService.subscribe(this.queueName, this.queueConfig);
  }
}
