import { Component } from '@angular/core';
import { WebstompService } from './stomp/webstomp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Twitter sentiment analyzer';

  constructor(private webstompService: WebstompService) {
    console.log('webstomp service injected into app-component');
  }
}
