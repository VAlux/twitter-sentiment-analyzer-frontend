import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StreamingControlService {

  constructor(private httpClient: HttpClient) { }

  private startStreamingRequest = 'http://sentiment-analyzer:8080/start';
  private stopStreamingRequest = 'http://sentiment-analyzer:8080/stop';

  startStreaming(): void {
    this.httpClient
      .get(this.startStreamingRequest)
      .subscribe(
        response => console.log(response),
        error => console.error(error)
      );
  }

  stopStreaming(): void {
    this.httpClient
      .get(this.stopStreamingRequest)
      .subscribe(
        response => console.log(response),
        error => console.error(error)
      );
  }
}
