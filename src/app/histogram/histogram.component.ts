import { Component, OnInit } from '@angular/core';
import { WebstompService } from '../stomp/webstomp.service';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {

  constructor(private webstompService: WebstompService) { }

  private veryNegativeTweets = 0;
  private negativeTweets = 0;
  private neutralTweets = 0;
  private positiveTweets = 0;
  private veryPositiveTweets = 0;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType  = 'bar';
  public barChartLegend = true;

  public barChartLabels: string[] = [
    'Very Negative',
    'Negative',
    'Neutral',
    'Positive',
    'Very Positive'
  ];

  public barChartData: any[] = [{data: [
    this.veryNegativeTweets,
    this.negativeTweets,
    this.negativeTweets,
    this.positiveTweets,
    this.veryPositiveTweets
  ], label: 'Tweets amount'}];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }


  ngOnInit(): void {
    this.subscribeToWebstomp();
  }

  private subscribeToWebstomp(): void {
    this.webstompService.observeMessages()
      .subscribe(message => {
        console.log('message received:' + message);
        const body = JSON.parse(message.body);
        switch (body['sentimentLevel']) {
          case 0:
            this.veryNegativeTweets++;
            break;
          case 1:
            this.negativeTweets++;
            break;
          case 2:
            this.neutralTweets++;
            break;
          case 3:
            this.positiveTweets++;
            break;
          case 4:
            this.veryPositiveTweets++;
            break;
        }

        const data = [
          this.veryNegativeTweets,
          this.negativeTweets,
          this.neutralTweets,
          this.positiveTweets,
          this.veryPositiveTweets
        ];

        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
    });
  }
}
