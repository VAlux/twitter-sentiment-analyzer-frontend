import { Component, OnInit } from '@angular/core';
import { WebstompService } from '../stomp/webstomp.service';
import { Message } from '@stomp/stompjs';
import { HttpClient } from '@angular/common/http';
import { StreamingControlService } from '../streaming-control/streaming-control.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private defaultTrackingTerms = 'twitter';

  public trackedTerms: string;
  public isStreaming = false;

  constructor(private streamingControlService: StreamingControlService) { }

  ngOnInit() {
    this.trackedTerms = this.defaultTrackingTerms;
   }

  trackTerms(): void {
    if (this.trackedTerms.length <= 0) {
      console.log('no terms to track specified.');
      this.trackedTerms = this.defaultTrackingTerms;
    }
    console.log('tracking: ' + this.trackedTerms);
  }

  startStreaming(): void {
    console.log('Streaming started');
    this.isStreaming = true;
    this.streamingControlService.startStreaming();
  }

  stopStreaming(): void {
    console.log('Streaming stopped');
    this.isStreaming = false;
    this.streamingControlService.stopStreaming();
  }
}
