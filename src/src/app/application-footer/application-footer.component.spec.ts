import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFooterComponent } from './application-footer.component';

describe('ApplicationFooterComponent', () => {
  let component: ApplicationFooterComponent;
  let fixture: ComponentFixture<ApplicationFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
