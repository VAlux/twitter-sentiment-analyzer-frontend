import { Component, OnInit } from '@angular/core';
import { WebstompService } from '../stomp/webstomp.service';
import { Message } from '@stomp/stompjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit() { }
}
