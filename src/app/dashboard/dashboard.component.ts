import { Component, OnInit } from '@angular/core';
import { WebstompService } from '../stomp/webstomp.service';
import { Message } from '@stomp/stompjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private defaultTrackingTerms = 'twitter';

  public trackedTerms: string;

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
  }

  stopStreaming(): void {
    console.log('Streaming stopped');
  }
}
