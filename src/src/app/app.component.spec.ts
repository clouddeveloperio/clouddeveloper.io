import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ApplicationHeaderComponent } from './application-header/application-header.component';
import { ApplicationContentComponent } from './application-content/application-content.component';
import { UserNotificationComponent } from './application-content/user-notification.component';
import { ApplicationFooterComponent } from './application-footer/application-footer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ApplicationHeaderComponent,
        ApplicationContentComponent,
        UserNotificationComponent,
        ApplicationFooterComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'clouddeveloper.io'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('clouddeveloper.io');
  }));
});
