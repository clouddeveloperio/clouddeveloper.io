import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

declare var $: any;

@Injectable()
export class VisitorCounterService {

  constructor() { }

  getVisitorCount(): Promise<any> {
    if (environment.production) {
      return $.getJSON(environment.tracking.getVisitorCount);
    }
    else {
      return new Promise(resolve => resolve({ Count: 1234567890}));
    }
  }
  updateVisitorCount(): void {
    if(environment.production) {
      $.get(environment.tracking.updateVisitorCount);
    }
  }

}
