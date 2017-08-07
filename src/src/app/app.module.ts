import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicationHeaderComponent } from './application-header/application-header.component';
import { ApplicationContentComponent } from './application-content/application-content.component';
import { ApplicationFooterComponent } from './application-footer/application-footer.component';
import { AppInsightsService } from './services/app-insights.service';
import { PlaylistService } from './services/playlist.service';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationHeaderComponent,
    ApplicationContentComponent,
    ApplicationFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppInsightsService, PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
