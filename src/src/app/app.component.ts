import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clouddeveloper.io';

  ngOnInit(): void {
    $(window).scroll(function(){
        let wScroll = $(this).scrollTop();
        $('.logo').css({
          'transform': 'translate(0px, ' + wScroll * 1.53 + '%)'
        });
    });
  }
}
