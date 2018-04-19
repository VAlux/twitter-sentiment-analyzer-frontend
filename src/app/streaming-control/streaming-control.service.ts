import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StreamingControlService {

  constructor(private httpClient: HttpClient) { }

  private startStreamingRequest = 'http://localhost:8080/start';
  private stopStreamingRequest = 'http://localhost:8080/stop';

  startStreaming(): void {
    console.log('-> starting  streaming...');
    this.httpClient
      .get(this.startStreamingRequest)
      .subscribe(
        response => console.log(response),
        error => console.error(error)
      );
  }

  stopStreaming(): void {
    console.log('<- stopping  streaming...');
    this.httpClient
      .get(this.stopStreamingRequest)
      .subscribe(
        response => console.log(response),
        error => console.error(error)
      );
  }
}
