import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicationHeaderComponent } from './application-header/application-header.component';
import { ApplicationContentComponent } from './application-content/application-content.component';
import { UserNotificationComponent } from './application-content/user-notification.component';
import { ApplicationFooterComponent } from './application-footer/application-footer.component';
import { AppInsightsService } from './services/app-insights.service';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationHeaderComponent,
    ApplicationContentComponent,
    UserNotificationComponent,
    ApplicationFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppInsightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
