import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebstompService } from './stomp/webstomp.service';
import { StompConfig, StompService } from '@stomp/ng2-stompjs';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { HistogramComponent } from './histogram/histogram.component';

const stompConfig: StompConfig = {
  url: 'ws://127.0.0.1:15674/ws',

  // Headers
  // Typical keys: login, passcode, host
  headers: {
    login: 'me',
    passcode: 'me'
  },

  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeat_in: 0, // Typical value 0 - disabled
  heartbeat_out: 20000, // Typical value 20000 - every 20 seconds
  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 5000 (5 seconds)
  reconnect_delay: 5000,

  // Will log diagnostics on console
  debug: true
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HistogramComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [
    StompService,
    WebstompService,
    {
      provide: StompConfig,
      useValue: stompConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
