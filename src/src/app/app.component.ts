import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { AppInsightsService } from './services/app-insights.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clouddeveloper.io';
  insightService: AppInsightsService;

  constructor(appInsightsService: AppInsightsService) {
    this.insightService = appInsightsService;
  }

  ngOnInit(): void {
    // Only trigger Application Insight tracking if we are running in production otherwise we'll get too many hits that are useless.
    if (environment.production) {
      this.insightService.logPageView('Home');
    }
    $(window).scroll(function(){
        let wScroll = $(this).scrollTop();
        $('.logo').css({
          'transform': 'translate(0px, ' + wScroll * 1.53 + '%)'
        });
    });
  }
}
