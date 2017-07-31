import { Component, OnInit } from '@angular/core';
import { AppInsightsService } from './services/app-insights.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clouddeveloper.io';

  constructor(appInsightsService: AppInsightsService) {
    appInsightsService.logPageView('Home');
  }

  ngOnInit(): void {
    $(window).scroll(function(){
        let wScroll = $(this).scrollTop();
        $('.logo').css({
          'transform': 'translate(0px, ' + wScroll * 1.53 + '%)'
        });
    });
  }
}
