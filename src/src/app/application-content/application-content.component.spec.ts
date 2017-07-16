import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationContentComponent } from './application-content.component';
import { UserNotificationComponent } from './user-notification.component';

describe('ApplicationContentComponent', () => {
  let component: ApplicationContentComponent;
  let fixture: ComponentFixture<ApplicationContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ApplicationContentComponent,
        UserNotificationComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    component.title = 'clouddeveloper.io';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to clouddeveloper.io channel!');
  }));
});
