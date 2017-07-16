import { Component, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-application-content',
  templateUrl: './application-content.component.html',
  styleUrls: ['./application-content.component.css']
})
export class ApplicationContentComponent {
  @Input()
  title: string;

  showModal(): void {
    $('.ui.modal').modal('show');
  }
}
